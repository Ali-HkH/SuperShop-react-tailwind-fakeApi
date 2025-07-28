import AdvantageBox from "../../components/About/AdvantageBox/AdvantageBox";
import MessageForm from "../../components/SingleBlog/MessageForm/MessageForm";

function Contact() {
   return (
      <div className="container">
         {/* contact location */}
         <div className="mt-10 mb-20 p-2.5 border border-gray-300/50 hover:border-indigo-700/50 transition-all duration-200">
            <iframe
               className="w-full aspect-[1.5/1] md:aspect-[2.5/1]"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
            ></iframe>
         </div>
         {/* contact info */}
         <div className="mb-20 py-[40px] md:py-[70px] bg-stone-50 border border-gray-300/35 text-center">
            <div className="flex justify-center items-center flex-col md:flex-row md:gap-x-16">
               <AdvantageBox svg="gem" text="Hotline: 080 900660" />
               <AdvantageBox svg="clock" text="Call: 040 5050 3396" />
               <AdvantageBox svg="dollar" text="7uptheme@gmail.com" />
            </div>
            <p className="px-5 md:px-24 text-stone-600">
               If the supplier fails to ship your products on time or the
               product quality does not meet the standards set in your contract,
               Aloshop will refund the covered amount of your payment.
            </p>
         </div>
         {/* contact form */}
         <MessageForm
            title="CONTACT FORM"
            placeholder="Please Send Us Your Feedback!"
            button="Send"
         />
      </div>
   );
}

export default Contact;
