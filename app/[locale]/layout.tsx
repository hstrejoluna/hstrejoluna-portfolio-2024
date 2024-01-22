import clsx from "clsx";
import {Metadata} from "next";
import {fontSans} from "@/config/fonts";
import {Providers} from "../providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '../../config';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params: {locale}}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} >
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
