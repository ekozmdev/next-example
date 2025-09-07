/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        // fetchがキャッシュされているかどうかをログに出す設定
        // キャッシュあり
        //  GET /task 200 in 19ms
        //  │ GET http://localhost:3000/api/tasks 200 in 2ms (cache hit)
        // キャッシュなし
        //  GET /task 200 in 17ms
        //  │ GET http://localhost:3000/api/tasks 200 in 6ms (cache skip)

        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
