import Image from "next/image";
import Header from "./component/Header/page"
import Headerbottom  from "./component/Headerbottom/page";
import Hero from "./component/Hero/page";
import { Button } from "@/components/ui/button"
import Logos from "./component/Logos/page"
import Courses from "./component/Courses/page"
import Achievements from "./component/Achievements/page"
import Part from "./component/Part/page"
import Team from "./component/Team/page"
import Slider from "./component/Slider/page"
import Footer from "./component/Footer/page"
export default function Home() {
  return (
    <div>
      <Header/>
      <Headerbottom/>
      <Hero/>
      <Button/>
      <Logos/>
      <Courses/>
      <Achievements/>
      <Part/>
      <Team/>
      <Slider/>
      <Footer/>
    </div>
  )
}