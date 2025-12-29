import React from "react";
import SIFOverview from "./HeroOverview";
import FundObjectives from "./FundObjectives";
import InvestmentStrategy from "./InvestmentStrategy";
import AssetClasses from "./AssetClasses";
import FundStructure from "./FundStructure";
import RiskDisclosure from "./RiskDisclosure";
import RegulatoryInfo from "./RegulatoryInfo";
import FundTeam from "./FundTeam";

const page = () => {
  return (
    <div>
      <SIFOverview />
      <FundObjectives />
      <InvestmentStrategy />
      <AssetClasses />
      <FundStructure />
      <RiskDisclosure />
      <RegulatoryInfo />
      <FundTeam />
    </div>
  );
};

export default page;
