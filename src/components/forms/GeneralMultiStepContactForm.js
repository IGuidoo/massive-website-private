"use client"

import Modal from "@/components/Modal";
import React, { useState } from "react";

const GeneralMultiStepContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState("step1");
    const [answers, setAnswers] = useState({
        selectedService: '',

        // WebDesignAndDevelopment
        heeftWebsite: '',
        redenHerontwerpen: [],
        andereRedenHerontwerpen: '',
        websiteFuncties: [],

    });




    const nextStep = () => {
        switch (currentStep) {
            case "step1":
                switch (answers.selectedService) {
                    case "WebDesignAndDevelopment":
                        setCurrentStep("WebDesignAndDevelopment");
                        break;
                    case "EcommerceAndWebWinkel":
                        setCurrentStep("EcommerceAndWebWinkel");
                        break;
                    case "Zoekmachineoptimalizatie":
                        setCurrentStep("Zoekmachineoptimalizatie");
                        break;
                    case "OnlineAdvertenties":
                        setCurrentStep("OnlineAdvertenties");
                        break;
                    case "OnlineMarketingStrategie":
                        setCurrentStep("OnlineMarketingStrategie");
                        break;
                    case "GeenVanDeBovenstaande":
                        setCurrentStep("GeenVanDeBovenstaande");
                        break;
                    default:
                        setCurrentStep("step2");
                        break;
                }
                break;
            case "WebDesignAndDevelopment":
            case "EcommerceAndWebWinkel":
            case "Zoekmachineoptimalizatie":
            case "OnlineAdvertenties":
            case "OnlineMarketingStrategie":
            case "GeenVanDeBovenstaande":
                setCurrentStep("contactDetails");
                break;
            default:
                setCurrentStep("step2");
                break;
        }
    };

    const prevStep = () => {
        // Adjust this function as needed to handle going back
        setCurrentStep("step1");
    };

    // Handle form submission here
    const submitForm = async () => {

        console.log(answers);

        alert('Email sent successfully!');
        // Reset form and states
        setCurrentStep("step1");
        setAnswers({
            selectedService: '',

            // WebDesignAndDevelopment
            heeftWebsite: '',
            redenHerontwerpen: [],
            andereRedenHerontwerpen: '',
            websiteFuncties: [],
    
        });
        setIsOpen(false);

        // try {
        //     const response = await fetch('/api/send-email', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(answers)
        //     });

        //     if (!response.ok) {
        //         throw new Error('Failed to send email');
        //     }

        //     const responseData = await response.json();

        //     if (responseData.success) {
        //         alert('Email sent successfully!');
        //         // Reset form and states
        //         setCurrentStep("step1");
        //         setAnswers({
        //             selectedService: '',
        //             // ... other answers reset to their initial states ...
        //         });
        //         setIsOpen(false);
        //     } else {
        //         alert('Failed to send email. Please try again later.');
        //     }
        // } catch (error) {
        //     console.error('Error sending email:', error);
        //     alert('An error occurred. Please try again later.');
        // }
    };

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Contact</button>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {currentStep === "step1" && <Step1 onNext={nextStep} selectedService={answers.selectedService} setService={(service) => setAnswers((prev) => ({ ...prev, selectedService: service }))} />}

                    {currentStep === "WebDesignAndDevelopment" &&
                        <WebDesignAndDevelopment
                            onNext={nextStep}
                            onBack={prevStep}
                            heeftWebsite={answers.heeftWebsite}
                            setHeeftWebsite={(value) => setAnswers((prev) => ({ ...prev, heeftWebsite: value }))}
                            redenHerontwerpen={answers.redenHerontwerpen}
                            setRedenHerontwerpen={(value) => setAnswers((prev) => ({ ...prev, redenHerontwerpen: value }))}
                            websiteFuncties={answers.websiteFuncties}
                            setWebsiteFuncties={(value) => setAnswers((prev) => ({ ...prev, websiteFuncties: value }))}
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    }
                    {currentStep === "EcommerceAndWebWinkel" && <EcommerceAndWebWinkel onNext={nextStep} onBack={prevStep} />}
                    {currentStep === "Zoekmachineoptimalizatie" && <Zoekmachineoptimalizatie onNext={nextStep} onBack={prevStep} />}
                    {currentStep === "OnlineAdvertenties" && <OnlineAdvertenties onNext={nextStep} onBack={prevStep} />}
                    {currentStep === "OnlineMarketingStrategie" && <OnlineMarketingStrategie onNext={nextStep} onBack={prevStep} />}
                    {currentStep === "GeenVanDeBovenstaande" && <GeenVanDeBovenstaande onNext={nextStep} onBack={prevStep} />}

                    {currentStep === "contactDetails" && <ContactDetails onBack={prevStep} onSubmit={submitForm} />}
                </Modal>
            )}
        </div>
    );
};

function Step1({ onNext, selectedService, setService }) {
    const handleNextClick = () => {
        console.log(selectedService);
        onNext();
    }

    return (
        <div className="flex flex-col items-start">
            <h2>Wat Leuk dat u Contact met ons wilt zoeken</h2>
            <p>Om een zo goed mogelijk beeld van uw situatie te krijgen willen we u graag een paar vragen stellen</p>
            <h3>In welke Dienst bent u geintereseerd</h3>
            <div className="flex flex-col">
                <label>
                    <input
                        type="radio"
                        value="WebDesignAndDevelopment"
                        checked={selectedService === "WebDesignAndDevelopment"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    Web Design & Development
                </label>

                <label>
                    <input
                        type="radio"
                        value="EcommerceAndWebWinkel"
                        checked={selectedService === "EcommerceAndWebWinkel"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    eCommerce en Webwinkel oplossingen
                </label>

                <label>
                    <input
                        type="radio"
                        value="Zoekmachineoptimalizatie"
                        checked={selectedService === "Zoekmachineoptimalizatie"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    SEO
                </label>

                <label>
                    <input
                        type="radio"
                        value="OnlineAdvertenties"
                        checked={selectedService === "OnlineAdvertenties"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    Advertentie beheer
                </label>

                <label>
                    <input
                        type="radio"
                        value="OnlineMarketingStrategie"
                        checked={selectedService === "OnlineMarketingStrategie"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    Online strategie ontwikkeling
                </label>

                <label>
                    <input
                        type="radio"
                        value="GeenVanDeBovenstaande"
                        checked={selectedService === "GeenVanDeBovenstaande"}
                        onChange={(e) => setService(e.target.value)}
                    />
                    Geen van de bovenstaande
                </label>

            </div>
            <button className="ml-auto" onClick={handleNextClick}>Next</button>
        </div>
    );
}

const handleCheckboxChange = (e, currentValues) => {
    if (e.target.checked) {
        // if checked, add to the array
        return [...currentValues, e.target.value];
    } else {
        // if unchecked, remove from the array
        return currentValues.filter(value => value !== e.target.value);
    }
};


function WebDesignAndDevelopment({ onNext, onBack, heeftWebsite, setHeeftWebsite, redenHerontwerpen, setRedenHerontwerpen, websiteFuncties, setWebsiteFuncties , answers, setAnswers}) {


    return (
        <div>
            <h2>Web Design & Development</h2>

            <h3>Heeft u op dit moment al een website?</h3>
            <div className="flex flex-col">
                <label>
                    <input
                        type="radio"
                        value="ja"
                        checked={heeftWebsite === "ja"}
                        onChange={(e) => setHeeftWebsite(e.target.value)}
                    />
                    Ja
                </label>
                <label>
                    <input
                        type="radio"
                        value="nee"
                        checked={heeftWebsite === "nee"}
                        onChange={(e) => setHeeftWebsite(e.target.value)}
                    />
                    Nee
                </label>
            </div>

            {/* reden herontwerpen */}
            <h3>Zo ja, wat zijn de belangrijkste rendenen voor het herontwerpen/upgraden?</h3>
            <div className="flex flex-col">
                <label>
                    <input
                        type="checkbox"
                        value="VerouderdDesign"
                        checked={redenHerontwerpen.includes("VerouderdDesign")}
                        onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                    />
                    Verouderd Design
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="NietMobielVriendelijk"
                        checked={redenHerontwerpen.includes("NietMobielVriendelijk")}
                        onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                    />
                    Niet Mobiel Vriendelijk
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="SlechteGebruikerservaring"
                        checked={redenHerontwerpen.includes("SlechteGebruikerservaring")}
                        onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                    />
                    Slechte Gebruikerservaring
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="WebsiteIsTraag"
                        checked={redenHerontwerpen.includes("WebsiteIsTraag")}
                        onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                    />
                    Website is erg traag
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="AndereRedenHerontwerpen"
                        checked={redenHerontwerpen.includes("AndereRedenHerontwerpen")}
                        onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                    />
                    Andere Reden
                </label>
            </div>
            {/* Add a textarea for users to provide a text answer */}
            {redenHerontwerpen.includes("AndereRedenHerontwerpen") && (
                <textarea
                    placeholder="Gelieve uw reden te specificeren..."
                    rows="4"
                    value={answers.andereRedenHerontwerpen}
                    onChange={(e) => setAnswers(prev => ({ ...prev, andereRedenHerontwerpen: e.target.value }))}
                ></textarea>



                // <textarea
                //     placeholder="Gelieve uw reden te specificeren..."
                //     rows="4"
                //     onChange={(e) => setRedenHerontwerpen(handleCheckboxChange(e, redenHerontwerpen))}
                // ></textarea>
            )}


            <h3>Welke functies zoekt u?</h3>
            <div className="flex flex-col">
                <label>
                    <input
                        type="radio"
                        value="ResponsiveDesign"
                        checked={websiteFuncties === "ResponsiveDesign"}
                        onChange={(e) => setWebsiteFuncties(e.target.value)}
                    />
                    Responsief ontwerp
                </label>
                <label>
                    <input
                        type="radio"
                        value="CMS"
                        checked={websiteFuncties === "CMS"}
                        onChange={(e) => setWebsiteFuncties(e.target.value)}
                    />
                    CMS (Content Management Systeem)
                </label>
                <label>
                    <input
                        type="radio"
                        value="Boekingen"
                        checked={websiteFuncties === "Boekingen"}
                        onChange={(e) => setWebsiteFuncties(e.target.value)}
                    />
                    Contact/Boekinsformulier
                </label>
                <label>
                    <input
                        type="radio"
                        value="Ecommerce"
                        checked={websiteFuncties === "Ecommerce"}
                        onChange={(e) => setWebsiteFuncties(e.target.value)}
                    />
                    E-Commerce functionaliteiten
                </label>
                <label>
                    <input
                        type="radio"
                        value="AndereReden"
                        checked={websiteFuncties === "AndereReden"}
                        onChange={(e) => setWebsiteFuncties(e.target.value)}
                    />
                    Andere Reden
                </label>
            </div>
            {/* Add a textarea for users to provide a text answer */}
            {websiteFuncties === "AndereReden" && (
                <textarea
                    placeholder="Gelieve uw reden te specificeren..."
                    rows="4"
                    onChange={(e) => setWebsiteFuncties(e.target.value)}
                ></textarea>
            )}


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function EcommerceAndWebWinkel({ onNext, onBack }) {
    return (
        <div>
            <h2>EcommerceAndWebWinkel</h2>


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function Zoekmachineoptimalizatie({ onNext, onBack }) {
    return (
        <div>
            <h2>Zoekmachineoptimalizatie</h2>


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function OnlineAdvertenties({ onNext, onBack }) {
    return (
        <div>
            <h2>OnlineAdvertenties</h2>


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function OnlineMarketingStrategie({ onNext, onBack }) {
    return (
        <div>
            <h2>OnlineMarketingStrategie</h2>


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function GeenVanDeBovenstaande({ onNext, onBack }) {
    return (
        <div>
            <h2>GeenVanDeBovenstaande</h2>


            <button onClick={onBack}>Back</button>
            <button onClick={onNext}>Next</button>
        </div>
    )
}

function ContactDetails({ onBack, onSubmit }) {
    return (
        <div>
            <h2>Enter Email and Message</h2>
            {/* Email and Message Input go here */}
            <button onClick={onBack}>Back</button>
            <button onClick={onSubmit}>Submit</button>
        </div>
    );
}

// ... your other step components ...

export default GeneralMultiStepContactForm;
