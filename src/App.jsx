import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Shell} from './app-shared/components/shell/Shell';
import {CoursesProvider} from './courses/contexts/courses-context';

const CourseDetailsPage = lazy(() => import('./app-pages/course-details/CourseDetails'));
const HomePage = lazy(() => import('./app-pages/home/Home'));
const AddCoursePage = lazy(() => import('./app-pages/add-course/AddCourse'));

export const App = () => {
  return (
    <Shell>
      <Suspense fallback={<div>Cargando...</div>}>
        <CoursesProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/agregar-curso" component={AddCoursePage}></Route>
              <Route exact path="/curso/:nombre" component={CourseDetailsPage}></Route>
              <Redirect to="/"></Redirect>
            </Switch>
          </Router>
        </CoursesProvider>
      </Suspense>
    </Shell>
  );
};
