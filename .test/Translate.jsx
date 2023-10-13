"use client"

import React, { useState, useEffect } from "react";
import axios from 'axios';
import OpenAI from 'openai';


export default function page() {
    const [text, setText] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const open_ai_key = process.env.OPEN_AI_API;
    const deepl_key = process.env.DEEPL_API;

    const openai = new OpenAI({
        apiKey: open_ai_key,
        dangerouslyAllowBrowser: true,
    });

    const gpt3Model = "gpt-3.5-turbo";
    const gpt4Model = "gpt-4";

    const translateOpenAI = async (model) => {
        try {
            console.log(`${model} Making request...`);
            const apiResponse = await openai.chat.completions.create({
                model,
                messages: [
                    {
                        role: "system",
                        content: "You are a professional translator and you are going to translate the following text into German:",
                    },
                    {
                        role: "user",
                        content:
                            `${text}`
                    },
                ],
                temperature: 1,
                // max_tokens: 1963,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            if (apiResponse) {
                const content = apiResponse.choices[0].message.content;
                console.log("Content", content)
                setResponse(content);
            } else {
                setError("No valid response content found in API response.");
            }
        } catch (error) {
            console.error("Error fetching data from OpenAI:", error);
            setError("An error occurred while fetching data from OpenAI.");
        }
    };

    // create a function that makes a api request to deepl
    const translateDeepl = async () => {
        try {
          console.log('Deepl Making request...');
          const apiResponse = await axios.post('http://localhost:3001/translate', {
            text: text,
          });
          if (apiResponse) {
            const content = apiResponse.data.translations[0].text;
            console.log('Content', content);
            setResponse(content);
          } else {
            setError('No valid response content found in API response.');
          }
        } catch (error) {
          console.error('Error fetching data from Deepl:', error);
          setError('An error occurred while fetching data from Deepl.');
        }
      };

    const translateText = async () => {
        const apiKey = deepl_key;
        const textToTranslate = 'Hello, world!';
        const targetLanguage = 'DE';  // German

        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/https://api.deepl.com/v2/translate', {
                auth_key: apiKey,
                text: textToTranslate,
                target_lang: targetLanguage
            });



            console.log(response.data.translations[0].text);
        } catch (error) {
            console.error(error);
        }
    };





    const combineTranslations = async () => {
        console.log('Translating...');
        const [gpt3Translation, gpt4Translation] = await Promise.all([
            translateOpenAI(gpt3Model),
            translateOpenAI(gpt4Model),
            translateText(),
        ]);
        const translations = [gpt3Translation, gpt4Translation, deeplTranslation];
        const bestTranslation = translations.reduce((prev, curr) => {
            return prev.length < curr.length ? prev : curr;
        });
        setTranslation(bestTranslation);
    };

    return (
        <section>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={translateDeepl}>button</button>
            <p>{response}</p>
            {/* <p>{translation}</p> */}
        </section>
    );
}

