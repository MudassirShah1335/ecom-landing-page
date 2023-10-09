import React from "react";
import Card from "./Card";

const BenefitSec = () => {
  return (
    <section className="px-20 py-4 pt-4 ">
      <div>
        <h1 className="text-5xl font-bold text-center ">
          Benefits of the Global Skill
        </h1>
        <h1 className="text-5xl font-bold text-center ">Seekers Award</h1>
      </div>
      <div
        className="flex flex-wrap gap-4 pt-12
      "
      >
        <Card
          Cname="No cost to school"
          Cpara="Postage of resources covered by Award. 5% of order given back to school to spend on resources."
        />
        <Card
          Cname="Digital"
          Cpara="No printing needed, each child has their own portfolio where text, photos and videos can be uploaded via website and app."
        />
        <Card
          Cname="Range of Activities"
          Cpara="Progressive, age-appropriate challenges that include life skills, enquiry, cultural, empathy, mental health, entrepreneurship and innovation."
        />
        <Card
          Cname="Bespoke and linked to School improvement"
          Cpara="All schools  Evidence portfolios will be provided to schools upon request for inspections, reviews etc."
        />
        <Card
          Cname="Inclusive"
          Cpara="With our language selection tab, all challenges can be read in any language of choice."
        />
        <Card
          Cname="Recognition"
          Cpara="For FS 2 – Yr2, the children will receive a medal and certificate upon completion. Year 3-8 children will be awarded a magnetic badge merit,."
        />
      </div>
    </section>
  );
};

export default BenefitSec;
