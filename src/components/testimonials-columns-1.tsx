import React from "react";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Found this relatively new clinic in Bavdhan and it's a true gem. The staff is perfect—they manage appointments well and even call to check in after treatment. The dentists are amazing, kind, and treat you with so much care.",
    name: "Prasad Palekar",
    role: "Patient"
  },
  {
    text: "Absolutely the best dental experience I've ever had! Dr. Chandrama explained everything in detail and made me feel super comfortable. The clinic is modern, clean, and welcoming. Highly recommend Wonder Smiles!",
    name: "Apurva Jadhav",
    role: "Patient"
  },
  {
    text: "I had a fantastic visit to this clinic. The staff is incredibly professional, warm and attentive. The dentist explained everything clearly and made me feel completely at ease throughout the procedure. Very neat clinic that too with state of the art equipments.",
    name: "Prasad Patil",
    role: "Patient"
  },
  {
    text: "Super friendly and down-to-earth dentist. Unlike other clinics that push for expensive treatments, they suggested only what was necessary. Trustworthy place.",
    name: "Saurabh Patil",
    role: "Patient"
  },
  {
    text: "I had a great experience at wonder smiles Dental Clinic! The entire team is extremely professional, friendly, and made me feel comfortable from the moment I walked in. Dr. Chandrama took the time to explain the procedure thoroughly.",
    name: "Piyush Sawale",
    role: "Patient"
  },
  {
    text: "Dr. Chandrama was extremely kind and professional. She explained the entire procedure in detail, clearly identifying the root cause and how it could be prevented. She also highlighted the importance of maintaining good oral hygiene.",
    name: "M Mamta",
    role: "Patient"
  },
  {
    text: "Five stars for professionalism and hygiene! The staff wear proper PPE, sanitize after every patient, and make you feel safe. My kids also loved the pediatric dentist here.",
    name: "Shivraj Kale",
    role: "Parent"
  },
  {
    text: "Our daughter's dental treatment was a very smooth experience, and we're happy with the results. We will definitely be recommending this clinic.",
    name: "Onkar Utekar",
    role: "Parent"
  },
  {
    text: "We had an excellent experience here. Every appointment was on time, and the treatment was completed exactly as scheduled. We truly appreciate the professionalism and will surely be recommending Dr. Chandrama to our contacts.",
    name: "Itisha Jain",
    role: "Patient"
  },
  {
    text: "As a father, I'm very happy with this clinic. The pedodontist Dr. Chandrama was patient, caring, and made my child feel completely at ease. A very child-friendly and professional clinic — highly recommended!",
    name: "Gyanesh Mohata",
    role: "Father"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={`${props.className} relative overflow-hidden`} style={{ height: '400px' }}>
      {/* Fade gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cultured to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cultured to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 pb-8 absolute top-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-6 rounded-2xl border border-light-gray shadow-lg bg-white max-w-xl w-full hover:shadow-xl transition-shadow duration-300" key={i}>
                  <div className="text-sonic-silver text-base leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-carolina-blue text-white flex items-center justify-center font-semibold text-lg border-2 border-carolina-blue/20">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-oxford-blue-1 text-base">{name}</div>
                      <div className="text-sonic-silver text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const MobileTestimonialsColumn = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} relative overflow-hidden`} style={{ height: '500px' }}>
      {/* Fade gradient overlays for mobile */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cultured to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cultured to-transparent z-10 pointer-events-none"></div>
      
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 absolute top-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.slice(0, 3).map(({ text, name, role }, i) => (
                <div className="p-6 rounded-2xl border border-light-gray shadow-lg bg-white hover:shadow-xl transition-shadow duration-300" key={i}>
                  <div className="text-sonic-silver text-base leading-relaxed mb-6">{text}</div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-carolina-blue text-white flex items-center justify-center font-semibold text-lg border-2 border-carolina-blue/20">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-oxford-blue-1 text-base">{name}</div>
                      <div className="text-sonic-silver text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsColumns() {
  return (
    <section id="testimonials" className="py-20 bg-cultured overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-oxford-blue-1 mb-4">
            What Parents Say
          </h2>
          <p className="text-sonic-silver text-lg max-w-2xl mx-auto font-lato">
            Hear from the parents who trust Dr. Chandrama Patil with their children's dental health
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid md:grid-cols-5 gap-4 max-w-7xl w-full">
            <TestimonialsColumn
              testimonials={testimonials.slice(0, 2)}
              duration={15}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 4)}
              duration={20}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(4, 6)}
              duration={17}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(6, 8)}
              duration={22}
              className="hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(8, 10)}
              duration={18}
              className="hidden md:block"
            />
            
            {/* Mobile version - single column with contained scrolling */}
            <MobileTestimonialsColumn className="md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}