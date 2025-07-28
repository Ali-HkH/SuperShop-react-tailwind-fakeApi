function AboutNav({ introSection, protectSection, reviewsSection }) {

   const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
   };
   
   return (
      <div className="flex gap-x-8 py-3">
         <button
            onClick={() => scrollToSection(introSection)}
            className="about-nav"
         >
            Introduction
         </button>
         <button
            onClick={() => scrollToSection(protectSection)}
            className="about-nav"
         >
            Protection
         </button>
         <button
            onClick={() => scrollToSection(reviewsSection)}
            className="about-nav"
         >
            Customer Reviews
         </button>
      </div>
   );
}

export default AboutNav;
