import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSampleForSupersetBrandLForm from './forms/i-i-s-sample-for-superset-brand-l';
import IISSampleForSupersetCarLForm from './forms/i-i-s-sample-for-superset-car-l';
import IISSampleForSupersetProducingCountryLForm from './forms/i-i-s-sample-for-superset-producing-country-l';
import IISSampleForSupersetBrandEForm from './forms/i-i-s-sample-for-superset-brand-e';
import IISSampleForSupersetCarEForm from './forms/i-i-s-sample-for-superset-car-e';
import IISSampleForSupersetProducingCountryEForm from './forms/i-i-s-sample-for-superset-producing-country-e';
import IISSampleForSupersetBrandModel from './models/i-i-s-sample-for-superset-brand';
import IISSampleForSupersetCarModel from './models/i-i-s-sample-for-superset-car';
import IISSampleForSupersetProducingCountryModel from './models/i-i-s-sample-for-superset-producing-country';
import IISSampleForSupersetSparePartModel from './models/i-i-s-sample-for-superset-spare-part';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sample-for-superset-brand': IISSampleForSupersetBrandModel,
    'i-i-s-sample-for-superset-car': IISSampleForSupersetCarModel,
    'i-i-s-sample-for-superset-producing-country': IISSampleForSupersetProducingCountryModel,
    'i-i-s-sample-for-superset-spare-part': IISSampleForSupersetSparePartModel
  },

  'application-name': 'Sample for superset',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sample for superset',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sample for superset',
          title: 'Sample for superset'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'sample-for-superset': {
          caption: 'SampleForSuperset',
          title: 'SampleForSuperset',
          'i-i-s-sample-for-superset-brand-l': {
            caption: 'Brand',
            title: ''
          },
          'i-i-s-sample-for-superset-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-sample-for-superset-producing-country-l': {
            caption: 'Producing country',
            title: ''
          }
        },
        'add-new-data': 'Add new tet data'
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-sample-for-superset-brand-l': IISSampleForSupersetBrandLForm,
    'i-i-s-sample-for-superset-car-l': IISSampleForSupersetCarLForm,
    'i-i-s-sample-for-superset-producing-country-l': IISSampleForSupersetProducingCountryLForm,
    'i-i-s-sample-for-superset-brand-e': IISSampleForSupersetBrandEForm,
    'i-i-s-sample-for-superset-car-e': IISSampleForSupersetCarEForm,
    'i-i-s-sample-for-superset-producing-country-e': IISSampleForSupersetProducingCountryEForm
  },

});

export default translations;
