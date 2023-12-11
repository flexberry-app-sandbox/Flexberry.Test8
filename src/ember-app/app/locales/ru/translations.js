import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
        'application-name': 'Test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
