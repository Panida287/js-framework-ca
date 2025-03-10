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
        <div className="flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
                    Contact Us
                </h2>
                <p className="text-gray-600 text-center mb-6">
                    Have any questions? Send us a message!
                </p>

                <form
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit((data) => {
                        console.log(data);
                        localStorage.setItem("contact", JSON.stringify(data));

                        alert("Message has been sent!");
                        reset();
                    })}
                >

                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                        <input
                            className="border rounded-md w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                            id="name"
                            type="text"
                            {...register("name", {
                                required: "Name is required",
                                minLength: {value: 3, message: "Must be at least 3 characters"},
                                maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                            })}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                        <input
                            className="border rounded-md w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                            id="lastName"
                            type="text"
                            {...register("lastName", {
                                required: "Last Name is required",
                                minLength: {value: 3, message: "Must be at least 3 characters"},
                                maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                            })}
                        />
                        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <input
                            className="border rounded-md w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Must be a valid email address",
                                },
                            })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="subject" className="block font-medium text-gray-700">Subject</label>
                        <input
                            className="border rounded-md w-full p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                            id="subject"
                            type="text"
                            {...register("subject", {
                                required: "Subject is required",
                                minLength: {value: 3, message: "Must be at least 3 characters"},
                                maxLength: {value: 50, message: "Cannot exceed 50 characters"},
                            })}
                        />
                        {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="body" className="block font-medium text-gray-700">Message</label>
                        <textarea
                            className="border rounded-md w-full p-2 mt-1 resize-none h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                            id="body"
                            {...register("body", {
                                required: "Message is required",
                                minLength: {value: 3, message: "Must be at least 3 characters"},
                                maxLength: {value: 1000, message: "Cannot exceed 1000 characters"},
                            })}
                        />
                        {errors.body && <span className="text-red-500 text-sm">{errors.body.message}</span>}
                    </div>

                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-all"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
