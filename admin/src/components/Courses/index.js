import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Grid, Link } from '@mui/material';
import { AllRoutes } from '../../routes';

// Test images
import testImage1 from "../../assets/screws.jpg";
import testImage2 from "../../assets/work.jpg";
import testImage3 from "../../assets/moose.jpg";
import testImage4 from "../../assets/extra1.jpg";
import testImage5 from "../../assets/extra2.jpg";
import testImage6 from "../../assets/chip.jpg";
import testImage7 from "../../assets/puzzle.jpg";
import CustomCard from '../common/CustomCard';


const allCourses = [
  {
    id: 1,
    img: testImage1,
    title: "Learning Python, Syntax and Coding",
    lessonCount: 12,
    category: "Python & Django",
    price: "12,000"
  },
  {
    id: 2,
    img: testImage2,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2022",
    lessonCount: 8,
    category: "Node.js, Express",
    price: "40,000"
  },
  {
    id: 3,
    img: testImage3,
    title: "Ultimate AWS Certified Solutions",
    lessonCount: 23,
    category: "AWS, Amazon services",
    price: "55,000"
  },
  {
    id: 4,
    img: testImage4,
    title: "The Complete 2022 Web Development Bootcamp",
    lessonCount: 31,
    category: "HTML5, CSS3, JavaScript",
    price: ""
  },
  {
    id: 5,
    img: testImage5,
    title: "Android Studio Framework, Intellij Idea",
    lessonCount: 17,
    category: "Android, Java",
    price: "15,000"
  },
  {
    id: 6,
    img: testImage6,
    title: "Unreal Gaming Studio for beginners",
    lessonCount: 22,
    category: "Unreal, Game development",
    price: "25,000"
  },
  {
    id: 7,
    img: testImage7,
    title: "The New Syntaxes and Programming in Kali Linux",
    lessonCount: 9,
    category: "Kali linux, Hacking",
    price: ""
  },
  {
    id: 8,
    img: testImage3,
    title: "Cryptocurrency and Advanced Blockchain Programming",
    lessonCount: 122,
    category: "Web 3.0, Blockchain",
    price: ""
  }
]



const Courses = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {allCourses.map((course, index) => (
          <Grid item md={3} key={index}>
            <Link underline="none" component={RouterLink} to={AllRoutes.CourseDetails.path(course.id)}>
              <CustomCard course={course}/>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Courses;

