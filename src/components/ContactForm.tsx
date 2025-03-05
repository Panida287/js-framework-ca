import {useForm} from "react-hook-form";
import {Contact} from "../types/contact";

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Contact>();

    return (
        <>
            <form
                className="flex flex-col gap-1 max-w-md mx-auto"
                onSubmit={handleSubmit((data) => {
                    console.log(data);
                    localStorage.setItem("contact", JSON.stringify(data));

                    alert("Message has been sent!");
                    reset();
                })}
            >
                <label htmlFor="name">Name</label>
                <input
                    className="border"
                    id="name"
                    type="text"
                    {...register("name", {
                        required: "Name is required",
                        minLength: {value: 3, message: "Must be at least 3 characters"},
                        maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                    })}
                    aria-label="name"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    className="border"
                    id="last-name"
                    type="text"
                    {...register("lastName", {
                        required: "Last Name is required",
                        minLength: {value: 3, message: "Must be at least 3 characters"},
                        maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                    })}
                    aria-label="last name"
                />
                {errors.lastName && <span className="text-red-500">{errors.lastName.message}</span>}

                <label htmlFor="email">Email</label>
                <input
                    className="border"
                    id="email"
                    type="text"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Must be a valid email address",
                        },
                    })}
                    aria-label="email"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                <label htmlFor="subject">Subject</label>
                <input
                    className="border"
                    id="subject"
                    type="text"
                    {...register("subject", {
                        required: "subject is required",
                        minLength: {value: 3, message: "Must be at least 3 characters"},
                        maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                    })}
                    aria-label="subject"
                />
                {errors.subject && <span className="text-red-500">{errors.subject.message}</span>}

                <label htmlFor="body">Message</label>
                <textarea
                    className="border h-20 w-full p-2 resize-none overflow-auto text-start"
                    id="body"
                    {...register("body", {
                        required: "Body message is required",
                        minLength: {value: 3, message: "Must be at least 3 characters"},
                        maxLength: {value: 1000, message: "Cannot exceed 1000 characters"},
                    })}
                    aria-label="body"
                />
                {errors.body && <span className="text-red-500">{errors.body.message}</span>}


                <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
                    Submit
                </button>
            </form>
        </>
    );
}