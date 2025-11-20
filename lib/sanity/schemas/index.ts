import siteSettings from './siteSettings';
import service from './service';
import blog from './blog';
import author, { category } from './author';
import testimonial from './testimonial';
import faq from './faq';
import appointment from './appointment';
import contact from './contact';
import aboutPage from './aboutPage';
import legalPage from './legalPage';
import navigation from './navigation';

export const schemaTypes = [
  siteSettings,
  service,
  blog,
  author,
  category,
  testimonial,
  faq,
  appointment,
  contact,
  aboutPage,
  legalPage,
  navigation,
];
