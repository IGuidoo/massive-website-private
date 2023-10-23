import KlaroConsent from '@/components/KlaroConsent';
import "@/config/klaro-config.js"

function MyApp({ Component, pageProps }) {
    console.log("MyApp");
  return (
    <>
      <Component {...pageProps} />
      {/* ... other components */}
      <KlaroConsent />
    </>
  );
}

export default MyApp;
