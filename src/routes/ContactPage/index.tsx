import {ContactForm} from "../../components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <h1
                className="flex justify-center text-2xl font-bold mb-4"
            >
                Send us a message!
            </h1>
            <ContactForm/>
        </>
    );
}
