import { useState, useEffect } from "react";
import { Page, Layout, Card, Text, Button } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Index() {
  const [isInstalled, setIsInstalled] = useState(true); // Assuming true means app is just installed
  const shopDomain = "hatly-wishlist-store.myshopify.com"; // Replace with your actual shop domain

  useEffect(() => {
    // Here you might check if the app is newly installed
    // For example, via an API call or checking a value in the session
    // setIsInstalled(true); // Example API check result
  }, []);

  const handleDeepLink = () => {
    const openUrl = `https://admin.shopify.com/store/hatly-wishlist-store/themes/139070996657/editor`;
    window.open(openUrl, "_blank");
  };

  return (
    <Page>
      <TitleBar title="Welcome" />
      <Layout>
        <Layout.Section>
          <Card sectioned title={isInstalled ? "Welcome!" : "Wishlist Settings"}>
            {isInstalled ? (
              <Text variant="bodyMd">App Installed Successfully! Welcome to our app.<Button
              variant="primary"
              tone="success"
              onClick={handleDeepLink}
            >
               Linking
            </Button></Text>
            ) : (
              <>
                <Text variant="bodyMd">Customize your wishlist settings below.</Text>
                <Button
                  variant="primary"
                  tone="success"
                  onClick={handleDeepLink}
                >
                  Linking
                </Button>
              </>
            )}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
