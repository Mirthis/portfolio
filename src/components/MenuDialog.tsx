"use client";

import { showContactModal } from "@/lib/state";
import * as Dialog from "@radix-ui/react-dialog";
import { useAtom } from "jotai";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import ContactForm from "./ContactForm";
import { XIcon } from "./Icons";

const MenuDialog = () => {
  const [open, setOpen] = useAtom(showContactModal);

  //  TODO: Opening the dialog shift
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-dark/80 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] border translate-x-[-50%] translate-y-[-50%] rounded-[6px] dark:bg-dark bg-light p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-lg font-medium">Contat Me</Dialog.Title>
          <Dialog.Description className="mb-4 text-opacity-50 text-dark/70 dark:text-light/70 leading-normal">
            Contact me for any questions
          </Dialog.Description>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
          >
            <ContactForm />
          </GoogleReCaptchaProvider>
          <Dialog.Close asChild>
            <button
              className="dark:text-light text-dark hover:border  hover:border-dark hover:dark:border-light absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <XIcon className="w-6 t" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuDialog;
