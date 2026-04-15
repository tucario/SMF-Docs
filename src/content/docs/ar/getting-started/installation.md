---
title: التثبيت
description: كيفية تثبيت Smarter Files في مؤسسة Salesforce الخاصة بك.
---

## الإصدار المجاني (GitHub)

1. انسخ أو حمّل المستودع من [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. انشره في مؤسسة Salesforce الخاصة بك باستخدام Salesforce CLI:

```bash
sf project deploy start --source-dir force-app
```

3. انتقل إلى صفحة سجل في Lightning App Builder واسحب مكوّن **Smarter Files** إلى التخطيط.

### النشر بنقرة واحدة (بديل)

يمكنك أيضاً استخدام أداة النشر من GitHub للتثبيت مباشرة في مؤسستك:

1. اختر بيئتك (إنتاج أو Sandbox):

![إعدادات أداة النشر](/docs/deploy-tool-settings.png)

2. اسمح بالوصول إلى مؤسسة Salesforce الخاصة بك:

![طلب السماح بالوصول](/docs/deploy-allow-access.png)

3. أكد المكوّنات المراد نشرها:

![تأكيد النشر](/docs/deploy-tool-confirmation.png)

## إصدار AppExchange

1. ثبّت من AppExchange (قريباً).
2. ضع مكوّن **Smarter Files** على أي صفحة سجل باستخدام Lightning App Builder.
3. كوّن قواعد الرؤية في لوحة إعدادات المكوّن.

## المتطلبات

- إصدار Salesforce **Enterprise** أو **Professional** أو **Unlimited**.
- تفعيل Lightning Experience.
- ترخيص Platform كافٍ — لا يتطلب ترخيص Salesforce الكامل.
