import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicy() {
  return (
    <div className="w-full mt-18 lg:mt-36.75">
      <div className="container pt-10 lg:pt-15">
        <h1 className="text-center">Privacy Policy</h1>

        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="w-full mt-6 md:mt-8 lg:mt-10"
        >
          <AccordionItem value="1">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>What do we use your information for?</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                The email address you provide may be used to send you
                information and updates pertaining to the software, in addition
                to receiving company news, updates, related product or service
                information, etc. and offers for third party trading and forex
                related products that we may notify you about. You can instantly
                unsubscribe from our mailing list at any time.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Third Party Links</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website or through email
                communications. These third party sites have separate and
                independent privacy policies. We therefore have no
                responsibility or liability for the content and activities of
                these linked sites. Nonetheless, we seek to protect the
                integrity of our site and welcome any feedback about these
                sites.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Children’s Online Privacy Protection Act Compliance</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                The email address you provide may be used to send you
                information and updates pertaining to the software, in addition
                to receiving company news, updates, related product or service
                information, etc. and offers for third party trading and forex
                related products that we may notify you about. You can instantly
                unsubscribe from our mailing list at any time.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Terms and Conditions</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                Please also visit our Terms and Conditions section establishing
                the use, disclaimers and disclaimer of liability governing the
                use of our website and products, services, and more at our Terms
                and Conditions page.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="5">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>GDPR Compliance</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                The GDPR guarantees a number of rights to EU citizens.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="6">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Right to be Informed</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                EU citizens have the right to be informed about the collection
                and use of their personal data. ClickBank provides information
                through our privacy policy and through the information on the
                order form. Clickbank collects data when you make your online
                payment at the checkout form/page. Outside of that form we may
                collect data for the purposes of communicating with you in
                regards to your purchase, support, or telling you about other
                products that may be available to you. Should you choose to
                unsubscribe you may do so at any time via the link provided in
                the email OR by emailing us to request to be removed if you do
                not see a link in the email. According to United States Law we
                have 10 days to remove you from our list(s) however its usually
                instant.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="7">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Right of Access</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                EU citizens have the right to request access to their
                information, and request information about how their data is
                being used. Companies must verify the identity of the requester
                and then promptly provide the information.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="8">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Right to Rectification</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                EU citizens have the right to update, correct, or complete their
                personal information. Customers can update their information in
                CLKBank.com. When a customer does so, ClickBank overwrites the
                old information and sends an email to the vendor explaining the
                change. The owners of this website will update any records
                containing the old information, to remove the old information
                and include the new information, within 30 days of receiving a
                proper request from the customer or from ClickBank.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="9">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Right to Erasure</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                EU citizens have the right to request the deletion of their
                information. Customers can make this request via email. When we
                have verified the information to be deleted, ClickBank sends an
                email to the vendor explaining the change. The owners of this
                website will delete the specific user data according to the
                communication from ClickBank, within 30 days of receiving a
                proper request from the customer or from ClickBank.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="10">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Right to Restrict Processing</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                EU citizens have a right to request that that their data no
                longer be processed or used. Customers can exercise this right
                by unsubscribing from marketing communications or by cancelling
                ongoing subscriptions. The owners of this website will comply
                with {"customers'"} decisions regarding the use of their
                information for marketing communications. If ClickBank contacts
                the owners of this website with any other restrictions on the
                ongoing use of a {"customer's "}personal information, we will
                comply.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="11">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>
                Rights Related to Automated Decision Making Including Profiling
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                The rights specified in the GDPR also apply to automated
                processing of {"customers'"} data. As a consequence, the
                automatic upsells feature is disabled for EU customers.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="12">
            <AccordionTrigger
              className={"hover:no-underline hover:cursor-pointer"}
            >
              <h4>Changes to our Privacy Policy</h4>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-body-large text-text-primary">
                If we decide to change our privacy policy, we will post those
                changes on this page.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
