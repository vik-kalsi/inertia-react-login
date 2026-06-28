import { Head } from '@inertiajs/react';
import Layout from './layout/Layout';
import { Form } from "@inertiajs/react";


export default function Welcome() {
    return (
        <>
            <Head title="Login" />

            <Layout>
                <div className="flex justify-center">
                    <Form className='grid gap-3 border-2 p-2' action="registerUser" method="post">

                        <input className='border-2 p-1' placeholder="Name" type="text" name="name" />
                        <input className='border-2 p-1' placeholder="Email" type="email" name="email" />
                        <input className='border-2 p-1' placeholder="Password" type="password" name="password" />
                        <input className='border-2 p-1' placeholder="Confirm Password" type="password" name="password_confirmation" />

                        <button className='border-2 cursor-pointer' type="submit">Create User</button>
                    </Form>
                </div>
            </Layout>
            
        </>
    );
}
