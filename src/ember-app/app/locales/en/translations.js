import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestКонтраагентыLForm from './forms/i-i-s-test-контраагенты-l';
import IISTestНоменкалтураLForm from './forms/i-i-s-test-номенкалтура-l';
import IISTestТестLForm from './forms/i-i-s-test-тест-l';
import IISTestКонтраагентыEForm from './forms/i-i-s-test-контраагенты-e';
import IISTestНоменкалтураEForm from './forms/i-i-s-test-номенкалтура-e';
import IISTestТестEForm from './forms/i-i-s-test-тест-e';
import IISTestКонтраагентыModel from './models/i-i-s-test-контраагенты';
import IISTestНоменкалтураModel from './models/i-i-s-test-номенкалтура';
import IISTestТестModel from './models/i-i-s-test-тест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-контраагенты': IISTestКонтраагентыModel,
    'i-i-s-test-номенкалтура': IISTestНоменкалтураModel,
    'i-i-s-test-тест': IISTestТестModel
  },

  'application-name': 'Test',

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
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
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
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1',
          'i-i-s-test-тест-l': {
            caption: 'ТестL',
            title: 'Тест'
          },
          'i-i-s-test-контраагенты-l': {
            caption: 'КонтраагентыL',
            title: 'Контраагенты'
          },
          'i-i-s-test-номенкалтура-l': {
            caption: 'НоменкалтураL',
            title: 'Номенкалтура'
          }
        }
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
    'i-i-s-test-контраагенты-l': IISTestКонтраагентыLForm,
    'i-i-s-test-номенкалтура-l': IISTestНоменкалтураLForm,
    'i-i-s-test-тест-l': IISTestТестLForm,
    'i-i-s-test-контраагенты-e': IISTestКонтраагентыEForm,
    'i-i-s-test-номенкалтура-e': IISTestНоменкалтураEForm,
    'i-i-s-test-тест-e': IISTestТестEForm
  },

});

export default translations;
