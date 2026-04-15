---
title: Public Links
description: Generate public sharing links for files.
---

## Overview

Generate public sharing links for individual files directly from the component, without navigating away from the record.

## How to Create a Public Link

1. Click the action menu on a file.
2. Select **Public Link**.
3. The component creates a Salesforce Content Distribution and copies the public URL to your clipboard.
4. A success toast confirms the link was created.

The generated URL is a standard Salesforce public link — it does not require authentication and can be shared with anyone.

## Configuration

Public links can be enabled or disabled per component instance via the **Show Public Link** property in Lightning App Builder.

:::note
Public link creation requires that Content Deliveries are enabled in your Salesforce org. Go to **Setup > Content Deliveries and Public Links** to enable this feature.
:::
