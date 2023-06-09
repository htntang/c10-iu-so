import react from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Auth } from "../components/auth";
import Awards from "./HomePageFeatures/Awards";
import FeaturedArticles from "./HomePageFeatures/FeaturedArticles";
import HeroImage from "./HomePageFeatures/HeroImage";
import Media from "./HomePageFeatures/Media";
import YourGoals from "./HomePageFeatures/YourGoals";

export default function HomePage(){
    return(
        <>
        {/* CSS Animation + Authentication */}
        <div class="box">
            <div class="row">
                <div class="column">
                    image
                </div>
                <div class="column">
                    <Auth />
                </div>
            </div>
        </div>

        {/* Self Check-Out Options + Book An Appointment */}
        <div class="box2">
            <YourGoals />
        </div>

        {/* Featured Articles in Print and Online Media */}
        <div class="box3">
            <FeaturedArticles />
        </div>

        {/* Podcast & Blog Posts */}
        <div class="box4">
            <Media />
        </div>

        {/* Awards */}
        <div class="box5">
            <Awards />
        </div>
        </>
    )
}