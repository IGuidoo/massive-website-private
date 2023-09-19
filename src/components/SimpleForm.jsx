"use client"

import styles from "@/styles/styles";


const SimpleForm = ({ data = [] }) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get('email');
        const message = formData.get('message');

        // You can now use the email and message variables as needed
        console.log(`Email: ${email}, Message: ${message}`);

        // Example: Send data to an API endpoint (update with your actual endpoint)
        // const response = await fetch('/api/submit', {
        //     method: 'POST',
        //     body: JSON.stringify({ email, message }),
        //     headers: { 'Content-Type': 'application/json' },
        // });
        // const data = await response.json();
        // console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <label htmlFor="email" className="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email" className="bg-secondary-50 w-full px-2 py-1" required />

                <label htmlFor="message" className="hidden">Message</label>
                <textarea id="message" name="message" placeholder="Your message" className="bg-secondary-50 w-full px-2 py-1" required></textarea>

                <button type="submit" className={`${styles.buttonP4} ${styles.buttonS3} ${styles.buttonT2}`}>
                    {data}
                </button>
            </div>
        </form>
    )
}

export default SimpleForm;