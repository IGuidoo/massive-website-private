"use client"

import Modal from "@/shared/modals/Modal";
import React, { useState } from "react";
import styles from "@/styles/styles";

// Toast
import Toast from '@/features/notifications/Toasty';
import { useToast } from '@/utils/contexts/ToastContext';

const INITIAL_ANSWERS = {
    selectedService: '',
    websiteURL: '',
    heeftWebsite: '',

    // WebDesignAndDevelopment
    redenHerontwerpen: [],
    andereRedenHerontwerpen: '',
    websiteFuncties: [],
    AndereRedenWebsiteFuncties: '',

    // EcommerceAndWebWinkel
    ecommercePlatform: [],
    AndereRedenEcommerce: '',
    hoeveelheidEcommerceProducten: '',

    // Zoekmachineoptimalizatie
    eerderGeinvesteerdSEO: '',
    doelenSEO: [],
    AndereRedenZoekmachineoptimalizatie: '',
    targetKeywords: '',

    // OnlineAdvertenties
    eerderGeinvesteerdSEA: '',
    genintereseerdeSEAPlatformen: [],
    AndereOnlineAdvertentiePladform: '',
    budget: '',

    // OnlineMarketingStrategie
    huidigeMarketingsKanalen: [],
    onlineMarkeingUitdagingen: '',
    zakelijkeDoelen: '',
    AndereOnlineMarketingKanalen: '',
};

const GeneralMultiStepContactForm = () => {
    const { toastType, setToastType, toastMessage, setToastMessage } = useToast();
    const [showToastContactForm, setShowToastContactForm] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState("step1");
    const [stepHistory, setStepHistory] = useState([]);

    const [budget, setBudget] = useState(500);

    const [answers, setAnswers] = useState(
        INITIAL_ANSWERS
    );

    // Handle form submission here
    const submitForm = async () => {
        // function that will filter out the empty values from the answers object
        // console.log("Answers: " + answers);
        const filteredAnswers = Object.fromEntries(
            Object.entries(answers).filter(([_, v]) => v != "")
        );
        // console.log("Filtered Answers: " + filteredAnswers);

        setToastType("success");
        setToastMessage("Email is verstuurd!");
        setShowToastContactForm(true);

        // Reset form and states
        setCurrentStep("step1");
        setAnswers(INITIAL_ANSWERS);
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
        //         setToastType("success");
        //         setToastMessage("Email is verstuurd!");
        //         setShowToastContactForm(true);

        //         // Reset form and states
        //         setCurrentStep("step1");
        //         setAnswers(INITIAL_ANSWERS);
        //         setIsOpen(false);
        //     } else {
        //         setToastType("alert");
        //         setToastMessage("Oeps er is iets mis gegaan");
        //         setShowToastContactForm(true);
        //     }
        // } catch (error) {
        //     console.error('Error sending email:', error);
        //     setToastType("alert");
        //     setToastMessage("Oeps er is iets mis gegaan");
        //     setShowToastContactForm(true);
        // }

    };

    const nextStep = () => {
        setStepHistory(prev => [...prev, currentStep]);

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
                        setCurrentStep("contactDetails");
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
        // Pop the last step from the history
        const lastStep = stepHistory[stepHistory.length - 1];

        // Remove the last step from the history
        setStepHistory(prev => prev.slice(0, -1));

        // Set the last step as the current step
        setCurrentStep(lastStep);
    };
    // Handle form submission here




    return (
        <>
            <button onClick={() => setIsOpen(true)}>Contact</button>

            {showToastContactForm && <Toast type={toastType} message={toastMessage} onClose={() => setShowToastContactForm(false)} />}

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {currentStep === "step1" &&
                    <Step1
                        onNext={nextStep}
                        selectedService={answers.selectedService}
                        setService={(service) => setAnswers((prev) => ({ ...prev, selectedService: service }))}
                    />
                }

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
                {currentStep === "EcommerceAndWebWinkel" &&
                    <EcommerceAndWebWinkel
                        onNext={nextStep}
                        onBack={prevStep}
                        heeftWebsite={answers.heeftWebsite}
                        setHeeftWebsite={(value) => setAnswers((prev) => ({ ...prev, heeftWebsite: value }))}
                        ecommercePlatform={answers.ecommercePlatform}
                        setEcommercePlatform={(value) => setAnswers((prev) => ({ ...prev, ecommercePlatform: value }))}
                        hoeveelheidEcommerceProducten={answers.hoeveelheidEcommerceProducten}
                        setHoeveelheidEcommerceProducten={(value) => setAnswers((prev) => ({ ...prev, hoeveelheidEcommerceProducten: value }))}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                }
                {currentStep === "Zoekmachineoptimalizatie" &&
                    <Zoekmachineoptimalizatie
                        onNext={nextStep}
                        onBack={prevStep}
                        eerderGeinvesteerdSEO={answers.eerderGeinvesteerdSEO}
                        setEerderGeinvesteerdSEO={(value) => setAnswers((prev) => ({ ...prev, eerderGeinvesteerdSEO: value }))}
                        doelenSEO={answers.doelenSEO}
                        setDoelenSEO={(value) => setAnswers((prev) => ({ ...prev, doelenSEO: value }))}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                }
                {currentStep === "OnlineAdvertenties" &&
                    <OnlineAdvertenties
                        onNext={nextStep}
                        onBack={prevStep}
                        eerderGeinvesteerdSEA={answers.eerderGeinvesteerdSEA}
                        setEerderGeinvesteerdSEA={(value) => setAnswers((prev) => ({ ...prev, eerderGeinvesteerdSEA: value }))}
                        genintereseerdeSEAPlatformen={answers.genintereseerdeSEAPlatformen}
                        setGenintereseerdeSEAPlatformen={(value) => setAnswers((prev) => ({ ...prev, genintereseerdeSEAPlatformen: value }))}
                        budget={answers.budget}
                        setBudget={setBudget}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                }
                {currentStep === "OnlineMarketingStrategie" &&
                    <OnlineMarketingStrategie
                        onNext={nextStep}
                        onBack={prevStep}
                        huidigeMarketingsKanalen={answers.huidigeMarketingsKanalen}
                        setHuidigeMarketingsKanalen={(value) => setAnswers((prev) => ({ ...prev, huidigeMarketingsKanalen: value }))}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                }
                {currentStep === "GeenVanDeBovenstaande" && <GeenVanDeBovenstaande onNext={nextStep} onBack={prevStep} />}

                {currentStep === "contactDetails" && <ContactDetails onBack={prevStep} onSubmit={submitForm} />}
            </Modal>
        </>
    );
};

function RadioGroup({ options, selectedValue, onChange }) {
    return (
        <div className="flex flex-col">
            {options.map(option => (
                <label key={option.value} className="flex items-center gap-1">
                    <input
                        type="radio"
                        className="h-4 w-4 rounded border-gray-300 accent-primary-500 focus:accent-primary-500"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <p className={`${styles.text}`}>
                        {option.label}
                    </p>
                </label>
            ))}
        </div>
    );
}

function CheckboxGroup({ options, selectedValues, onChange }) {
    return (
        <div className="flex flex-col">
            {options.map(option => (
                <label
                    key={option.value}
                    className=" flex items-center gap-1"
                >
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 accent-primary-500 focus:accent-primary-500"
                        value={option.value}
                        checked={selectedValues.includes(option.value)}
                        onChange={(e) => onChange(handleCheckboxChange(e, selectedValues))}
                    />
                    <p className={`${styles.text}`}>
                        {option.label}
                    </p>
                </label>
            ))}
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

// First step
const SERVICE_OPTIONS = [
    { value: "WebDesignAndDevelopment", label: "Web Design & Development" },
    { value: "EcommerceAndWebWinkel", label: "eCommerce en Webwinkel oplossingen" },
    { value: "Zoekmachineoptimalizatie", label: "SEO (Zoekmachineoptimalizatie)" },
    { value: "OnlineAdvertenties", label: "Advertentie beheer" },
    { value: "OnlineMarketingStrategie", label: "Online strategie ontwikkeling" },
    { value: "GeenVanDeBovenstaande", label: "Geen van de bovenstaande" },
];


const JANEE_OPTIONS = [
    { value: "ja", label: "Ja" },
    { value: "nee", label: "Nee" }
];

// WebDesignAndDevelopment
const REDESIGN_REASONS = [
    { value: "VerouderdDesign", label: "Verouderd Design" },
    { value: "NietMobielVriendelijk", label: "Niet Mobiel Vriendelijk" },
    { value: "SlechteGebruikerservaring", label: "Slechte Gebruikerservaring" },
    { value: "WebsiteIsTraag", label: "Website is erg traag" },
    { value: "AndereRedenHerontwerpen", label: "Andere Reden" },
];

const WEBSITE_FUNCTIES = [
    { value: "ResponsiveDesign", label: "Responsief ontwerp" },
    { value: "CMS", label: "CMS (Content Management Systeem)" },
    { value: "Boekingen", label: "Contact/Boekinsformulier" },
    { value: "Ecommerce", label: "E-Commerce functionaliteiten" },
    { value: "AndereRedenWebsiteFuncties", label: "Andere Reden" },
];


// EcommerceAndWebWinkel
const ECOMMERCE_PLATFORM = [
    { value: "Shopify", label: "Shopify" },
    { value: "WooCommerce", label: "WooCommerce" },
    { value: "Magento", label: "Magento" },
    { value: "AangepsateOplossing", label: "Aangepaste oplossing" },
    { value: "AndereRedenEcommerce", label: "Anders" },
];

const ECOMMERCE_PRODUCTS = [
    { value: "MinderDan50", label: "Minder dan 50" },
    { value: "50Tot200", label: "50 tot 200" },
    { value: "200Tot1000", label: "200 tot 1000" },
    { value: "MeerDan1000", label: "Meer dan 1000" },
];


// Zoekmachineoptimalizatie
const ZOEKMACHINEOPTIMALIZATIE_OPTIONS = [
    { value: "VerhogenOrganischeZoekrangschikking", label: "Verhogen van organische zoekrangschikking" },
    { value: "LokaleZoekpresentieVersterken", label: "Lokale zoekpresentie versterken" },
    { value: "VerhogenOrganischVerkeer", label: "Verhogen van organisch verkeer" },
    { value: "Contentoptimalisatie", label: "Contentoptimalisatie" },
    { value: "TechnischeSEOauditReparaties", label: "Technische SEO-audit/reparaties" },
    { value: "AndereRedenZoekmachineoptimalizatie", label: "Andere Reden" },
];

// OnlineAdvertenties
const ONLINE_ADVERTENTIES_PLADFORMS = [
    { value: "Google", label: "Google Ads" },
    { value: "Facebook", label: "Facebook Ads" },
    { value: "Instagram", label: "Instagram Ads" },
    { value: "LinkedIn", label: "LinkedIn Ads" },
    { value: "AndereOnlineAdvertentiePladform", label: "Andere Reden Ads" },
];

// OnlineMarketingStrategie
const ONLINE_MARKETING_KANALEN = [
    { value: "SEO", label: "SEO (Zoekmachineoptimalizatie)" },
    { value: "EMailmarketing", label: "E-mailmarketing" },
    { value: "SocialeMedia", label: "Sociale media" },
    { value: "PPCAdvertenties", label: "PPC-advertenties" },
    { value: "Contentmarketing", label: "Contentmarketing" },
    { value: "AndereOnlineMarketingKanalen", label: "Anders (specificeer)" },
];





// Different steps
function Step1({ onNext, selectedService, setService, showErrorMessage, setShowErrorMessage }) {
    return (
        <>
            <div className="flex flex-col items-start">
                <h2 className="text-2xl font-bold">Wat Leuk dat u Contact met ons wilt zoeken</h2>
                <p>Om een zo goed mogelijk beeld van uw situatie te krijgen willen we u graag een paar vragen stellen</p>

                <h3 className="pt-4">In welke Dienst bent u geïnteresseerd</h3>
                <RadioGroup
                    options={SERVICE_OPTIONS}
                    selectedValue={selectedService}
                    onChange={setService}
                    isRequired={true}
                    showErrorMessage={showErrorMessage}
                />
            </div>

            <div className="mt-auto pt-4 flex flex-row justify-between">
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    );
}

function WebDesignAndDevelopment({ onNext, onBack, heeftWebsite, setHeeftWebsite, redenHerontwerpen, setRedenHerontwerpen, websiteFuncties, setWebsiteFuncties, answers, setAnswers }) {

    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={` text-2xl`}>Web Design & Development</h2>

                    <h3 className="pt-4">Heeft u op dit moment al een website?</h3>
                    <RadioGroup options={JANEE_OPTIONS} selectedValue={heeftWebsite} onChange={setHeeftWebsite} />
                    {heeftWebsite.includes("ja") && (
                        <textarea
                            className="w-full"
                            placeholder="Website URL"
                            rows="1"
                            value={answers.websiteURL}
                            onChange={(e) => setAnswers(prev => ({ ...prev, websiteURL: e.target.value }))}
                        ></textarea>
                    )}


                    {/* reden herontwerpen */}
                    <h3 className="pt-4">Zo ja, wat zijn de belangrijkste rendenen voor het herontwerpen/upgraden?</h3>
                    <CheckboxGroup options={REDESIGN_REASONS} selectedValues={redenHerontwerpen} onChange={setRedenHerontwerpen} />
                    {/* Add a textarea for users to provide a text answer */}
                    {redenHerontwerpen.includes("AndereRedenHerontwerpen") && (
                        <textarea
                            className="w-full"
                            placeholder="Gelieve uw reden te specificeren..."
                            rows="4"
                            value={answers.andereRedenHerontwerpen}
                            onChange={(e) => setAnswers(prev => ({ ...prev, andereRedenHerontwerpen: e.target.value }))}
                        ></textarea>
                    )}


                    <h3 className="pt-4">Welke functies zoekt u?</h3>
                    <CheckboxGroup options={WEBSITE_FUNCTIES} selectedValues={websiteFuncties} onChange={setWebsiteFuncties} />
                    {/* Add a textarea for users to provide a text answer */}
                    {websiteFuncties.includes("AndereRedenWebsiteFuncties") && (
                        <textarea
                            className="w-full"
                            placeholder="Gelieve uw reden te specificeren..."
                            rows="4"
                            value={answers.AndereRedenWebsiteFuncties}
                            onChange={(e) => setAnswers(prev => ({ ...prev, AndereRedenWebsiteFuncties: e.target.value }))}
                        ></textarea>
                    )}
                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function EcommerceAndWebWinkel({ onNext, onBack, heeftWebsite, setHeeftWebsite, ecommercePlatform, setEcommercePlatform, hoeveelheidEcommerceProducten, setHoeveelheidEcommerceProducten, answers, setAnswers }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={` ${styles.heading4xl}`}>Ecommerce & Webwinkel Oplossingen</h2>

                    <h3 className="pt-4">Heeft u op dit moment al een website?</h3>
                    <RadioGroup options={JANEE_OPTIONS} selectedValue={heeftWebsite} onChange={setHeeftWebsite} />
                    {heeftWebsite.includes("ja") && (
                        <textarea
                            className="w-full"
                            placeholder="Website URL"
                            rows="1"
                            value={answers.websiteURL}
                            onChange={(e) => setAnswers(prev => ({ ...prev, websiteURL: e.target.value }))}
                        ></textarea>
                    )}

                    <h3 className="pt-4">Welk platform gebruikt u of heeft u interesse in?</h3>
                    <CheckboxGroup options={ECOMMERCE_PLATFORM} selectedValues={ecommercePlatform} onChange={setEcommercePlatform} />
                    {ecommercePlatform.includes("AndereRedenEcommerce") && (
                        <textarea
                            className="w-full"
                            placeholder="Specificeer uw platform..."
                            rows="2"
                            value={answers.AndereRedenEcommerce}
                            onChange={(e) => setAnswers(prev => ({ ...prev, AndereRedenEcommerce: e.target.value }))}
                        ></textarea>
                    )}

                    <h3 className="pt-4">Hoeveel producten wilt u verkopen?</h3>
                    <RadioGroup options={ECOMMERCE_PRODUCTS} selectedValue={hoeveelheidEcommerceProducten} onChange={setHoeveelheidEcommerceProducten} />

                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function Zoekmachineoptimalizatie({ onNext, onBack, eerderGeinvesteerdSEO, setEerderGeinvesteerdSEO, doelenSEO, setDoelenSEO, answers, setAnswers }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={`text-green-500 ${styles.heading4xl}`}>Zoekmachineoptimalizatie</h2>


                    <h3 className="pt-4">Heeft u eerder geïnvesteerd in SEO?</h3>
                    <RadioGroup options={JANEE_OPTIONS} selectedValue={eerderGeinvesteerdSEO} onChange={setEerderGeinvesteerdSEO} />

                    <h3 className="pt-4">Wat zijn uw belangrijkste doelen voor SEO?</h3>
                    <CheckboxGroup options={ZOEKMACHINEOPTIMALIZATIE_OPTIONS} selectedValues={doelenSEO} onChange={setDoelenSEO} />
                    {doelenSEO.includes("AndereRedenZoekmachineoptimalizatie") && (
                        <textarea
                            className="w-full"
                            placeholder="Geef uw specifieke doelen op..."
                            rows="4"
                            value={answers.AndereRedenZoekmachineoptimalizatie}
                            onChange={(e) => setAnswers(prev => ({ ...prev, AndereRedenZoekmachineoptimalizatie: e.target.value }))}
                        ></textarea>
                    )}

                    <h3 className="pt-4">Zijn er specifieke trefwoorden of zinnen die u target?</h3>
                    <textarea
                        className="w-full"
                        placeholder="Geef uw specifieke trefwoorden of zinnen op..."
                        rows="4"
                        value={answers.targetKeywords}
                        onChange={(e) => setAnswers(prev => ({ ...prev, targetKeywords: e.target.value }))}
                    ></textarea>
                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function OnlineAdvertenties({ onNext, onBack, eerderGeinvesteerdSEA, setEerderGeinvesteerdSEA, genintereseerdeSEAPlatformen, setGenintereseerdeSEAPlatformen, budget, setBudget, answers, setAnswers }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={` ${styles.heading4xl}`}>Online Advertenties</h2>

                    <h3 className="pt-4">Heeft u eerder geïnvesteerd in online adverteren?</h3>
                    <RadioGroup options={JANEE_OPTIONS} selectedValue={eerderGeinvesteerdSEA} onChange={setEerderGeinvesteerdSEA} />

                    <h3 className="pt-4">Welke platformen gebruikt u of heeft u interesse in?</h3>
                    <CheckboxGroup options={ONLINE_ADVERTENTIES_PLADFORMS} selectedValues={genintereseerdeSEAPlatformen} onChange={setGenintereseerdeSEAPlatformen} />
                    {genintereseerdeSEAPlatformen.includes("AndereOnlineAdvertentiePladform") && (
                        <textarea
                            className="w-full"
                            placeholder="Geef uw specifieke doelen op..."
                            rows="4"
                            value={answers.AndereOnlineAdvertentiePladform}
                            onChange={(e) => setAnswers(prev => ({ ...prev, AndereOnlineAdvertentiePladform: e.target.value }))}
                        ></textarea>
                    )}

                    <h3 className="pt-4">Wat is uw geschatte maandelijkse advertentiebudget?</h3>
                    <label>
                        <input
                            type="range"
                            min={500}
                            max={100000}
                            step={500}   // Increment by 500 for each step
                            value={budget}
                            onChange={e => setBudget(e.target.value)}
                        />
                    </label>

                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function OnlineMarketingStrategie({ onNext, onBack, huidigeMarketingsKanalen, setHuidigeMarketingsKanalen, setAnswers, answers }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={` ${styles.heading4xl}`}>Online Marketingstrategie</h2>

                    <h3 className="pt-4">Met welke uitdagingen wordt u geconfronteerd met uw huidige online marketingstrategie?</h3>
                    <textarea
                        className="w-full"
                        placeholder="Laat ons meer weten over uw uitdaging..."
                        rows="4"
                        value={answers.OnlineMarkeingUitdagingen}
                        onChange={(e) => setAnswers(prev => ({ ...prev, onlineMarkeingUitdagingen: e.target.value }))}
                    ></textarea>

                    <h3 className="pt-4">Welke online marketingkanalen gebruikt u momenteel?</h3>
                    <CheckboxGroup options={ONLINE_MARKETING_KANALEN} selectedValues={huidigeMarketingsKanalen} onChange={setHuidigeMarketingsKanalen} />
                    {huidigeMarketingsKanalen.includes("AndereOnlineMarketingKanalen") && (
                        <textarea
                            className="w-full"
                            placeholder="Geef uw specifieke doelen op..."
                            rows="4"
                            value={answers.AndereOnlineMarketingKanalen}
                            onChange={(e) => setAnswers(prev => ({ ...prev, AndereOnlineMarketingKanalen: e.target.value }))}
                        ></textarea>
                    )}


                    <h3 className="pt-4">Wat zijn uw top 3 zakelijke doelen voor het komende jaar?</h3>
                    <textarea
                        className="w-full"
                        placeholder="Geef uw specifieke doelen op..."
                        rows="4"
                        value={answers.ZakelijkeDoelen}
                        onChange={(e) => setAnswers(prev => ({ ...prev, zakelijkeDoelen: e.target.value }))}
                    ></textarea>

                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function GeenVanDeBovenstaande({ onNext, onBack }) {
    return (
        <>
            <div className="grid grid-cols-5">
                <div className=" col-span-3">
                    <h2 className={` ${styles.heading4xl}`}>GeenVanDeBovenstaande</h2>
                </div>

                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onNext}>Volgende</button>
            </div>
        </>
    )
}

function ContactDetails({ onBack, onSubmit }) {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className=" ">
                    <h2 className={` ${styles.heading4xl}`}>Doelen</h2>
                    {/* Email and Message Input go here */}
                </div>
                <div>
                    rechter kant
                </div>
            </div>
            <div className="mt-auto pt-4 flex flex-row justify-between">

                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onBack}>Terug</button>
                <button className="px-4 py-2 bg-primary-500 text-white rounded-md " onClick={onSubmit}>Versturen</button>
            </div>
        </>
    );
}

const GOALS = [
    { label: "DoelgroepBereiken", value: "Doelgroep bereiken" },
    { label: "VertrouwenEnGeloofwaardigheidOpbouwen", value: "Vertrouwen en geloofwaardigheid opbouwen" },
    { label: "OnlineZichtbaarheidVergroten", value: "Online zichtbaarheid vergroten" },
    { label: "KosteneffectieveMarketing", value: "Kosteneffectieve marketing" },
    { label: "BeterPresterenDanConcurrentie", value: "Beter presteren dan concurrentie" },
    { label: "AndereRedenGoals", value: "Anderes" },
];

const GESCHATTE_BUDGET = [
    { label: "MinderDan1000", value: "Minder dan €1000" },
    { label: "1000Tot3000", value: "€1000 tot €3000" },
    { label: "3000Tot5000", value: "€3000 tot €5000" },
    { label: "5000Tot7000", value: "€5000 tot €7000" },
    { label: "7000Tot10000", value: "€7000 tot €10000" },
    { label: "MeerDan10000", value: "Meer dan €10000" },
]

const GEWENSTE_TIJDLIJN = [
    { label: "ZoSnelMogelijk", value: "Zo snel mogelijk" },
    { label: "Binnen1Maand", value: "Binnen 1 maand" },
    { label: "Binnen3Maanden", value: "Binnen 3 maanden" },
    { label: "Binnen6Maanden", value: "Binnen 6 maanden" },
    { label: "Binnen1Jaar", value: "Binnen 1 jaar" },
    { label: "NietZeker", value: "Niet zeker" },
]


const CONTACT_DETAILS = [
    { label: "Naam", type: "text" },
    { label: "Email", type: "email" },
    { label: "Telefoonnummer", type: "tel" },
    { label: "Bedrijfsnaam", type: "text" },
    { label: "Website", type: "text" },
    { label: "Bericht", type: "textarea" },
];


export default GeneralMultiStepContactForm;
