import React from "react";
import "./Hero.css";

import HeroHeader from './HeroHeader';
import HeroSubHeader from "./HeroSubHeader";
import Button from './Button';

import Avatar1 from "../../assets/Avatar1";
import ResumeIcon from '../../assets/hero/ResumeIcon';
import ContactIcon from '../../assets/hero/ContactIcon';

export default function Hero() {
  return (
    <div className="hero-container">
      <Avatar1 />
      <HeroHeader />
      <HeroSubHeader />
      <div className="button-container">
        <Button img={<ResumeIcon />} text='Resume' />
        <Button img={<ContactIcon />} text='Resume' />
      </div>
    </div>
  );
}
