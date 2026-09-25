import { getPageDomainConfig } from "@/lib/get-domain-config";
import Navbar from "@/components/layouts/Navbar";

export default async function SiteNavbar() {
  const config = await getPageDomainConfig();
  return <Navbar siteName={config.siteName} />;
}
