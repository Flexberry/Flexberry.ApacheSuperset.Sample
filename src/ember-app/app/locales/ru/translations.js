import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sample for superset',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sample for superset',
          title: 'Sample for superset'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
        'add-new-data': 'Добавить тестовые данные'
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
