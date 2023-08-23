import React from "react";
import ClientsLogo from "../../assets/ClientsLogo.png";
import ChevronLogo from "../../assets/ChevronLogo.png";
import GnpcLogo from "../../assets/GnpcLogo.png";
import MtnLogo from "../../assets/MtnLogo.png";
import AirtelLogo from "../../assets/AirtelLogo.png";
import ErotonLogo from "../../assets/ErotonLogo.png";
import TotalLogo from "../../assets/TotalLogo.png";
import McLogo from "../../assets/McLogo.png";
import DemeLogo from "../../assets/DemeLogo.png";
import LngLogo from "../../assets/LngLogo.png";
import OvhEnergyLogo from "../../assets/OvhEnergyLogo.png";

const Clients = () => {
  return (
    <section>
      <div className="w-full">
        <img src={ClientsLogo} alt="clients" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 justify-center items-center">
        <img src={ChevronLogo} alt="Chevron" />
        <img src={GnpcLogo} alt="GNPC" />
        <img src={MtnLogo} alt="MTN" />
        <img src={AirtelLogo} alt="Airtel" />
        <img src={ErotonLogo} alt="Eroton" />
        <img src={TotalLogo} alt="Total" />
        <img src={McLogo} alt="MC" />
        <img src={DemeLogo} alt="DEME" />
        <img src={LngLogo} alt="LNG" />
        <img src={OvhEnergyLogo} alt="OVH-Energy" />
      </div>
    </section>
  );
};

export default Clients;
