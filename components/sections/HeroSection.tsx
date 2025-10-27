// import Link from "next/link";
import { defineQuery } from "next-sanity";
// import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
// import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
// import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
// import { ProfileImage } from "./ProfileImage";


const HERO_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
  firstName,
  lastName,
  headline,
  headlineStaticText,
  headlineAnimatedWords,
  headlineAnimationDuration,
  shortBio,
  email,
  phone,
  location,
  availability,
  socialLinks,
  yearsOfExperience,
  profileImage
}`);

async function HeroSection() {
  const { data: profile } = await sanityFetch({ query: HERO_QUERY});
  // console.log(profile);

  if (!profile) {
    return null;
  }


  return (
    <div>HeroSection</div>
  )
}

export default HeroSection