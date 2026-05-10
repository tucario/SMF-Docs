---
title: التثبيت
description: كيفية تثبيت Smarter Files في مؤسستك على Salesforce.
---

import { Image } from 'astro:assets';
import packageInstaller from '../../../../assets/screenshots/package-installer.png';
import permSets from '../../../../assets/screenshots/permission-sets-deployed.png';

## إصدار AppExchange (حزمة مُدارة)

1. افتح رابط التثبيت الذي أرسله إليك مسؤول المبيعات في Tucario (أو انتقل إلى قائمة AppExchange).
2. اختر **Install for All Users** أو **Install for Admins Only** أو **Install for Specific Profiles** بحسب طريقة التحكم في الوصول التي تريدها.
3. وافق على أي طلبات وصول من جهات خارجية وانتظر حتى يكتمل التثبيت.

<Image src={packageInstaller} alt="مثبّت حزمة Salesforce لتطبيق Smarter Files" />

## الإصدار المجاني (GitHub)

1. انسخ المستودع أو نزّله من [GitHub](https://github.com/tucario/SalesforceSmarterFiles).
2. انشر المشروع في مؤسستك على Salesforce باستخدام Salesforce CLI:

```bash
sf project deploy start --source-dir src
```

## تعيين مجموعات الصلاحيات

يأتي Smarter Files مع ثلاث مجموعات صلاحيات. يحتاج كل مستخدم يتفاعل مع المكوّن على الأقل إلى المجموعة الأساسية.

<Image src={permSets} alt="مجموعات صلاحيات Smarter Files في Setup" />

| مجموعة الصلاحيات | مطلوبة لـ | تمنح |
|---|---|---|
| **Tucario Files (Base)** | جميع مستخدمي المكوّن | الوصول إلى التطبيق، وعمليات CRUD على كائن الربط الخاص بالرؤية، والوصول إلى وحدات التحكم في الملفات |
| **Tucario - Manage File Categories** | المسؤولون وأصحاب الفئات | الصلاحية المخصصة `Tucario_Manage_Categories` — تعيين الفئات على الملفات وتجاوز تصفية الفئات |
| **Tucario - View Private Documents** | المسؤولون والموارد البشرية والامتثال | الصلاحية المخصصة `Tucario_View_Private_Documents` — عرض الملفات التي علّمها مستخدمون آخرون كخاصة |

قم بالتعيين عبر **Setup → Permission Sets → [الاسم] → Manage Assignments**.

## إضافة المكوّن إلى صفحة سجل

1. افتح أي صفحة سجل في **Lightning App Builder**.
2. اسحب **Smarter Files** من لوحة المكوّنات وأفلته في التخطيط.
3. قم بضبط خصائص التصميم في اللوحة الجانبية — راجع [إعداد المكوّن](/ar/configuration/component-setup/) للاطلاع على مرجع الخصائص الكامل.
4. احفظ الصفحة وقم بتنشيطها.

## المتطلبات

- إصدار Salesforce **Enterprise** أو **Professional** أو **Unlimited**.
- تفعيل Lightning Experience.
- تراخيص Platform Starter / Platform Plus مدعومة — لا يلزم ترخيص Salesforce كامل.
- لإنشاء الروابط العامة: يجب تفعيل **Content Deliveries and Public Links** (Setup → Salesforce Files).
