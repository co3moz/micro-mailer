micro-mailer
=================

Simple mail micro service for your projects.

Configuration
----------------
```javascript
{
  "mailer": {
    "host": "smtp.gmail.com",
    "secure": true,
    "auth": {
      "user": "name@gmail.com", // your gmail account name
      "pass": "pass" // your gmail account password
    },
    "tls": {
      "rejectUnauthorized": false
    }
  },
  "from": "name@gmail.com", // gmail won't allow to change this to something else
  "gluon": {
    "listen": {
      "ip": "127.0.0.1", // allow only local requests, if you want to allow them all use 0.0.0.0
      "port": "3162"
    },
    "dir": "./src"
  },
  "logger": {
    "level": "LOG"
  }
}
```

> **Note:** gmail requires some password job. Check [here](https://accounts.google.com/b/0/DisplayUnlockCaptcha) and [here too](https://security.google.com/settings/security/apppasswords)

Routes
-------------

## POST /send

Required fields are;

* subject
* to
* content
* type

Type is "html" or "text". If your content is html then you should define type as "html". To is who is going to take these mails. You can use comma to send more people. Subject is the topic. 

This service immediately return "#id sending in progress" message. you can keep id and verify it for later.

## GET /verify:id

You can check your mail status. Is it still going or sent or even returned error? if returned message is "going" or "sent" there is no error. If something else returned then it is in error status.

> for example: GET /verify3
> GET /verify89


License
---------------
The MIT License (MIT)
Copyright (c) 2016 Doğan Derya


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

