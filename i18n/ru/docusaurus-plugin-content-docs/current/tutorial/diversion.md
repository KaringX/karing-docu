---
sidebar_position: 2
---

# Политики и разделение трафика

## Обзор

- Политики разделения трафика бывают трех типов:
  - 1 Политики, встроенные провайдером
    - При добавлении конфигурации есть переключатель `Включить правила разделения ISP`
  - 2 Встроенные geosite, geoip, ACL
    - По умолчанию правила(geosite, geoip) включаются согласно Настройки -> Разделение -> `Страна и регион`
    - Например: для региона Китай по умолчанию включаются `geosite:cn` и `geoip:cn`, действие для них - **прямое подключение**
    - Примечание: geosite сейчас автоматически включается только для cn и ir
  - 3 [Пользовательские правила](/tutorial/custom-diversion)
- _Дополнение_: при первой установке Karing будет предложен набор групп разделения. Их можно включать/отключать по ситуации

## Встроенные наборы правил

### Включение встроенных политик

- Настройки -> Разделение -> Правила разделения -> Редактировать -> выберите пользовательскую группу разделения -> Rule Set(build-in) -> отметьте нужные правила -> Сохранить
- Вернитесь в Правила разделения -> настройте разделение
- Вернитесь на главный экран Karing, Karing автоматически переподключится и применит изменения

### Описание правил GeoSite/GeoIP

- Пример для материкового Китая(`cn`):
  - Если в названии есть !cn, значит сайты из этого правила в регионе cn недоступны нормально и требуют прокси-сервер
  - Если в названии есть cn(без !), значит сайты из этого правила в регионе cn доступны нормально и прокси не нужен; задайте прямое подключение
  - Пользователям региона cn рекомендуется вручную включить geolocation-!cn и в политике группы маршрутизации выбрать _автоматический выбор сервера_ или вручную указать сервер

- Регион Иран(`ir`)
  - Встроенные правила уже объединены с [Iran-sing-box-rules](https://github.com/Chocolate4U/Iran-sing-box-rules/tree/rule-set?tab=readme-ov-file)
  - Ниже список добавленных правил

    ```
    geoip/
        amazon.srs
        arvancloud.srs
        bing.srs
        derakcloud.srs
        digitalocean.srs
        github.srs
        iranserver.srs
        ir.srs
        linode.srs
        malware.srs
        microsoft.srs
        openai.srs
        oracle.srs
        parspack.srs
        phishing.srs

    geosite
        ads.srs
        category-ads-ir.srs
        category-bank-ir.srs
        category-bourse-ir.srs
        category-education-ir.srs
        category-forums-ir.srs
        category-gov-ir.srs
        category-insurance-ir.srs
        category-ir.srs
        category-media-ir.srs
        category-news-ir.srs
        category-payment-ir.srs
        category-scholar-ir.srs
        category-shopping-ir.srs
        category-social-media-ir.srs
        category-tech-ir.srs
        category-travel-ir.srs
        cn@ads.srs
        cryptominers.srs
        geolocation-!cn@ads.srs
        geolocation-cn@ads.srs
        ir.srs
        malware.srs
        nsfw.srs
        phishing.srs
        social.srs

    ```

### ACL

- ACL состоит из набора фрагментов правил: [неполный список](https://github.com/KaringX/karing-ruleset?tab=readme-ov-file#%E8%A7%84%E5%88%99%E7%A2%8E%E7%89%87)

## Изменение совпадения политик

- Политика разделения может соответствовать двум настройкам:
  - Действие при совпадении: текущий выбор/автоматический выбор/прямое подключение/блокировать/нет
    - Если правило временно не нужно включать, можно задать _нет_
  - Группа прокси или отдельный сервер-узел для совпадения
    - Фиксированные узлы можно объединить в пользовательскую группу прокси для удобного обслуживания

### Шаги настройки

- Настройки -> Разделение -> `Правила разделения` -> выберите политику разделения -> измените соответствующее действие или узел
- Вернитесь на главный экран Karing, отключите подключение и подключитесь заново

## Примеры

- [Ускоритель Docker](/blog/case/docker)
- [Блокировка рекламы](/blog/case/banad)

## Другие функции разделения

- [Следующий урок: пользовательское разделение](/tutorial/custom-diversion)
- [Разделение по приложениям Android](/tutorial/perapp-proxy)
