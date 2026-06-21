import { Head } from '@inertiajs/react';
import Layout from './layout/Layout';;


export default function Welcome() {
    return (
        <>
            <Head title="Login" />

            <Layout>
                <div className="flex justify-center">
                    <h1 className='mt-20'>Login</h1>
                </div>
            </Layout>
            
        </>
    );
}
