/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
                port:''
            },  
        ],
        domains :['firebasestorage.googleapis.com'],

    }


};

export default nextConfig;
