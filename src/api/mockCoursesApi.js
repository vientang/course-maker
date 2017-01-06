// import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "react-redux-building-applications",
    course: "Pluralsight",
    title: "Building Applications with React and Redux in ES6",
    url: "http://www.pluralsight.com/courses/react-redux-react-router-es6",
    author: "cory-house",
    category: "JavaScript"
  },
  {
    id: "web-components-shadow-dom",
    course: "Udacity",
    title: "Object Oriented Javascript",
    watchHref: "https://www.udacity.com/course/object-oriented-javascript--ud015",
    authorId: "marcus-phillips",    
    category: "JavaScript"
  },
  {
    id: "cs50",
    course: "edX",
    title: "Intro to Computer Science",
    url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
    author: "david-j-malan",
    category: "Computer Science"
  },
  {
    id: "divide-conquer",
    course: "Coursera",
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    url: "https://www.coursera.org/learn/algorithms-divide-conquer",
    authorId: "tim-roughgarden",    
    category: "Computer Science"
  },
  {
    id: "understand-nodejs",
    course: "Udemy",
    title: "Learn and Understand NodeJS",
    url: "https://www.udemy.com/understand-nodejs",
    authorId: "andrew-mead",    
    category: "NodeJS"
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

// //This would be performed on the server in a real app. Just stubbing in.
// const generateId = (course) => {
//   return replaceAll(course.title, ' ', '-');
// };

// class CourseApi {
//   static getAllCourses() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(Object.assign([], courses));
//       }, delay);
//     });
//   }

//   static saveCourse(course) {
//     course = Object.assign({}, course); // to avoid manipulating object passed in.
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Simulate server-side validation
//         const minCourseTitleLength = 1;
//         if (course.title.length < minCourseTitleLength) {
//           reject(`Title must be at least ${minCourseTitleLength} characters.`);
//         }

//         if (course.id) {
//           const existingCourseIndex = courses.findIndex(a => a.id == course.id);
//           courses.splice(existingCourseIndex, 1, course);
//         } else {
//           //Just simulating creation here.
//           //The server would generate ids and watchHref's for new courses in a real app.
//           //Cloning so copy returned is passed by value rather than by reference.
//           course.id = generateId(course);
//           course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
//           courses.push(course);
//         }

//         resolve(course);
//       }, delay);
//     });
//   }

//   static deleteCourse(courseId) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const indexOfCourseToDelete = courses.findIndex(course => {
//           course.id == courseId;
//         });
//         courses.splice(indexOfCourseToDelete, 1);
//         resolve();
//       }, delay);
//     });
//   }
// }

export default CoursesApi;