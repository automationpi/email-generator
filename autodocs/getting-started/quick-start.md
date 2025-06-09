---
title: Quick Start
description: Quick Start
---

# Quick Start

### Basic Examples
Here's how to generate multiple random email addresses:

```javascript
const emails = require('email-generator');

console.log(emails.generateEmail());
console.log(emails.generateEmail());
console.log(emails.generateEmail());
```

Sample output:

```json
{ email: 'alice.smith67890@domain.com' }
{ email: 'bob.jones12345@anotherdomain.org' }
{ email: 'carol.taylor54321@yetanother.com' }
```

### API
- `generateEmail()`: Returns an object with a single property `email`, containing a generated email string.

### Configuration & Options
Currently, the package does not support configuration options. The email pattern is fixed to `firstname.lastname<randomNumber>@domain`.

---
