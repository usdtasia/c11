import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Home: "Home",
      History: "History",
      FAQ: "FAQ",
      TermsOfService: "Terms of Service",
      Support: "Support",
      SignIn: "Sign in",
      SignUp: "Sing up",
      LogOut: "Log out",
      CardOneMain: "24/7 support",
      CardOneTxt:
        "Our support team is available to assist you at any time of the day or night.",
      CardTwoMain: "The best rates on the market",
      CardTwoTxt:
        "We cooperate with more than 20 crypto trading platforms to offer you the most favorable rates.",
      CardThreeMain: "Fast transactions",
      CardThreeTxt:
        "The average transaction speed is 5-40 minutes, allowing you to quickly capitalize on market opportunities.",
      HomeQuestionsBlock1: "Why trust USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA is an instant and anonymous cryptocurrency exchange service that has been on the market since 2018. During this time, millions of users have successfully used our crypto exchange, and today we offer fast cryptocurrency exchange and purchase services to more than 2.6 million satisfied customers every month. In order to improve the functioning of our crypto exchange, we have partnered with industry leading companies. USDTASIA's qualified support staff is available 24/7 to help you with all your exchange related questions at any time.",
      HomeQuestionsBlock2: "How to exchange cryptocurrency",
      HomeAnswersBlock2:
        "1. 1.Set the exchange pair<br />Select the pair to be exchanged<br /><br />" +
        "2. Enter your wallet address<br />Enter the address of the cryptocurrency wallet to which your cryptocurrency will be sent<br /><br />" +
        "3. Make a payment<br />Send the cryptocurrency you want to exchange to the address you see on the screen<br /><br />" +
        "4. Wait for the funds to arrive<br />Track the progress of your exchange. You will receive your cryptocurrency or fiat money as soon as possible",
      HomeQuestionsBlock3: "How soon will I get my cryptocurrency?",
      HomeAnswersBlock3:
        "On average, the cryptocurrency exchange process takes between 15 and 60 minutes. However, this time may increase if a particular blockchain ",
      HomeQuestionsBlock4: "What cryptocurrencies do you support?",
      HomeAnswersBlock4:
        "Users are able to buy and exchange more than 500 cryptocurrencies in a few clicks at the best transaction rates. As the cryptocurrency market is developing very fast, we are continuously expanding the list of digital currencies available for fast exchange, buying and selling at the best rates. Exchange and buy BTC, ETH, XRP, LTC and other coins from a wide range of supported cryptocurrencies by choosing a convenient payment method (Visa, Mastercard, Apple Pay or bank transfer).",
      HomeQuestionsBlock5:
        "I couldn't find my currency in the list. What do I do?",
      HomeAnswersBlock5:
        "We have an extensive network of payout agents all over the world, if your exchange amount is more than 10000 usdt - we will find for you a way of payment and the best rate in any currency of the world",
      HomeQuestionsBlock6: "Do you have wholesale exchange rates?",
      HomeAnswersBlock6:
        "We have special rates for exchange amounts over 10000 usd. Write to us in online chat. USDTASIA support service, as well as the exchange service itself works round the clock and will be glad to help you",
      AboutOurBrand: "About our brand ",
      AffilateProgram: "AFFILATE Program",
      PrivacyPolicy: "Privacy Policy",
      Order: "ORDER",
      PersonalInformation: "Personal information",
      Created: "Created",
      Pending: "Pending",
      Cancelled: "Cancelled",
      Success: "Success",
      WhatShouldBeDone: "What to do next:",
      WhatShouldBeDone1:
        "Verify the data entered, you will need it in case you have any issues with the exchange",
      WhatShouldBeDone2:
        "Click on the button pay application and follow the further instructions",
      WhatShouldBeDone3:
        "After payment, write to the operator about the payment",
      WhatShouldBeDone4: "Wait for the receipt to your account or wallet",
      Terms_h: "USDTAsia's Terms of Service and Privacy Policy.",
      Terms_allTxt:
        "<br /> 1. Parties to the Agreement.<br /><br />" +
        " 1.1 The Agreement is concluded between the Internet service for exchange of Electronic Assets usdtasia hereinafter referred to as the Service, on the one hand, and the User, in the person of the one who has used the services of the Service, on the other hand.<br /><br />" +
        "2. List of terms.<br /><br />" +
        "2.1. The Service is a system of providing Internet services for exchange, sale and purchase of digital and/or electronic currencies <br /><br />" +
        "2.2. User is any natural person who uses the services of the Service<br /><br />" +
        "2.3. Application is an expression of the User's intention to use one of the services offered by the Service, by filling out an electronic form through the Service's website, on the terms and conditions described in the Agreement and specified in the parameters of this Application <br /><br />" +
        "2.4. Electronic Unit is a unit of account of the respective electronic settlement systems, denoting a certain amount of claims or other rights arising from the agreement of the electronic settlement systems with their users <br /><br />" +
        "3.Subject of the Agreement.<br /><br />" +
        "3.1. The subject of this Agreement is to provide the Service User with the service of exchange of Electronic Units. <br /><br />" +
        "4. General Terms and Conditions<br /><br />" +
        "4.1.This Agreement regulates the relations between the User and the Service regarding the services provided by the Service to the User and cancels all previous agreements between the Service and the User on this subject<br /><br />" +
        "4.2. This agreement comes into effect from the moment the User completes the formation of the Application<br /><br />" +
        "4.3 Both parties, represented by the Service and the User, accept this agreement as an equivalent contract in writing.<br /><br />" +
        "4.4. The Service reserves the right to unilaterally make changes to this agreement without appropriate notice to the User, but with mandatory publication of the current version of the agreement on this page.<br /><br />" +
        "4.5. This agreement includes clauses and subclauses of the rules described in the articles “Cryptocurrency Deposit Rules” and “Refund Rules”. <br /><br />" +
        "5. Terms of Service <br /><br />" +
        "5.1. If the Service account receives an amount that differs from the amount specified in the application, the Service makes a recalculation that corresponds to the actual receipt of Electronic Units. Most of the directions of the Service are carried out in automatic mode, when creating an Application for manual direction of the exchange, it is necessary to make sure that the operator is working (otherwise, payment will be made during the working hours of the operator). Cryptocurrency processing takes place after reaching the number of network confirmations defined by the Exchange, depending on the specific case. The required number of network confirmations for crediting Cryptocurrency Assets is specified in the article “Rules for Cryptocurrency Deposits”.<br /> <br />" +
        "5.2.In case the User requests a Refund, it follows the rules described in the article “Refund Rules”.<br /><br />" +
        "5.3. In case of cancelation of the agreement or receipt of erroneous payment, the Electronic Units are returned within 72 hours from the date of agreement to the Return.<br /><br />" +
        "5.4. If the Electronic Units are not received from the User on the Service's account within the specified period of time, from the moment of the User's application, the agreement between the parties is terminated by the Service on the one hand, as the agreement does not come into effect. If the Electronic Units are transferred to the Service's account after the specified period, such funds are subject to Refund according to the “Refund Rules” after the User's application or the Service restores the User's Application with the User's consent.<br /><br />" +
        "5.5. If there is a delay in transferring funds to the details specified by the User due to the fault of the settlement system, the Service is not liable for damages resulting from the long receipt of funds. In this case the User should agree that all claims will be brought to the settlement system, and the Service renders its assistance to the best of its abilities within the limits of the law. <br /> <br />" +
        "5.6. In case of using the services of the Service, the User fully agrees that the Service bears limited responsibility within the framework of these rules of the received title units and does not give additional guarantees to the User, as well as does not bear additional responsibility to the User. Accordingly, the User does not bear additional responsibility to the Service. <br /> <br />" +
        "5.7.The Service is not liable for damages and consequences in case of erroneous transfer of Electronic Units if the User has specified incorrect details when creating the Application. <br /> <br />" +
        "5.8. Claims for payments are accepted not later than 2 hours after the payment has been made. The cost of the service of search and refund of erroneous payments is 500 usdt. <br /> <br />" +
        "5.8.1. If the Customer specifies a bank card issued by a financial institution that does not match the bank selected in the direction of the exchange transaction, or makes a mistake in the specified details of the beneficiary, in accordance with the terms of service provision, the Customer is obliged to pay a fee of 100 usdt for processing the claim resulting from this discrepancy <br /> <br />" +
        "5.9.It is strictly forbidden to use the Service for illegal transfers and fraudulent actions. When entering into this agreement, the User undertakes to fulfill these requirements and in case of fraud to bear criminal liability established by law. <br /> <br />" +
        "6.10. At the first request the Service has the right to transfer information about the transfer of Electronic Units to law enforcement authorities, administration of payment systems, as well as to victims of illegal actions who suffered as a result of fraud proven by judicial authorities <br /> <br />" +
        "5.11. The User undertakes to present all documents proving his/her identity in case of suspicion of fraud and money laundering <br /> <br />" +
        "5.12. The User undertakes not to interfere with the operation of the Service and not to damage its software and hardware, and the User undertakes to provide accurate information to ensure that the Contractor fulfills all the terms and conditions of the contract. <br /> <br />" +
        "5.13. The User is obliged to comply with the norms corresponding to the legislation, as well as not to tamper with the communication flows and not to create obstacles for the normal operation of the program code of the Service <br /> <br />" +
        "5.14. The User is prohibited from making exchanges in favor of third parties <br /> <br /> " +
        "5.15. In case of suspicious transactions, the User may be asked for verification. <br /> <br />" +
        "5.16.In the case of using bank cards with a fee from the recipient (for the use of credit limit, cards for social payments, etc.) the fee is paid by the recipient, the exchange service does not bear any responsibility for such fees <br /> <br />" +
        "5.17. All payments made in fiat currencies are made without using decimal fractions <br /> <br />" +
        "6. Contingencies. <br /> <br />" +
        "6.1 If in the process of processing the User's Application unforeseen circumstances arise that contribute to the Service's failure to fulfill the terms and conditions of the Agreement, the deadlines for the fulfillment of the Application are postponed for the corresponding period of the duration of force majeure. The Service is not responsible for overdue obligations. Any factors that are beyond the control of the Service may be considered as unforeseen circumstances <br /> <br />" +
        "6.2 In case the client has not received an international transfer, we will make a refund, the refund period is 10 working days <br /> <br />" +
        "7.Claims and Disputes. <br /> <br />" +
        "7.1 Claims under this Agreement are accepted by the Service in the form of an e-mail in which the User specifies the essence of the claim or in the technical support chat of Users. <br /> <br />" +
        "8. Waiver of Obligations <br /> <br />" +
        "8.1.The Service has the right to refuse to conclude the contract and fulfill the Application without giving any reasons. <br /> <br />" +
        "9. Storage and processing of personal data <br /> <br />" +
        "9.1. The Service accepts personal data from the User for the purpose of carrying out operations, which the Service undertakes to store in encrypted form, not to make public, not to transfer to third parties, except for the cases described in clause 5.9 of this Agreement. 5.9 of this agreement <br /> <br />" +
        "9.2. The Service has the right, if necessary, to independently carry out activities to collect additional data about the User by any available means. All information collected as a result of such activities is not made public, is not transferred to third parties, except as described in paragraph 5.9. of this agreement <br /> <br />" +
        "9.3. The Service has the right to transfer the User's personal data and details of transactions performed by the User, provided that their confidential status is preserved upon an official written request of the Exchange or the Electronic Settlement System / court decision / own initiative (in case of need for investigation) to law enforcement authorities, as well as to the User to whom they belong <br /> <br />" +
        "9.4. All collected data about the User, as well as details of transactions made by him/her, shall be stored in the database of the Service for five years from the moment of execution by the Service of the last User's Order",
      Support_q1: "Contacting website tech support is quick and easy!",
      Support_q2: "Attention! We never write first!",
      Support_q3: "Online 24/7",
      Support_a1:
        "Our website team will help you solve any of your questions, Clean Exchange support is experienced, qualified and reliable team. Choose a suitable and comfortable way of communication and write to our operators by e-mail, telegram or in the chat window on the site! You will get an answer quickly and clearly, it's that easy!",
      Support_a2:
        "In social networks there is a large number of scammers who will try to embezzle your money pretending to be us. It is important to know that we never send requests to add or send any malicious links. A great way to protect yourself would be to only add to us through a link from the site, not through a search. Otherwise, we do not guarantee that you will be communicating with us and not with scammers whose goal is to obtain your personal data.",
      Support_a3:
        "In our service you get support 24/7, you can ask any question to our operators, regardless of the bitcoin rate at the moment or you have a technical error in the translation, our staff is always ready to answer you! Despite everything, the efficiency of our specialists is at the highest level. And their number allows us to organize round-the-clock work of the support service - without lunches, holidays and weekends.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia.com",
      Support_a6: "24/7 - chat on the site",
      Affilate_h: "AFFILATE Program ",
      Affilate_txt1:
        "The affiliate program allows registered users to earn on affiliate royalties from the exchanges of customers who came to our site through a referral link. Participation in the program is quite simple. You need to register on our site. And write to tech support, you will be given your personal link to make the exchange. Partner percentage depends on the total amount of exchanges of your referrals and will vary according to the table:",
      Affilate_txt2:
        "Withdrawal of affiliate profit is carried out every day. The minimum amount for withdrawal is $10.",
      Affilate_level: "Level",
      Affilate_refs: "Total amount of exchanges of referrals ",
      Affilate_yours: "Your profit",
      Home_checkboxTxt1:
        "By using the site and creating an exchange, you agree to",
      Home_checkboxTxt2: "UsdtAsia's Terms of Service",
      Home_checkboxTxt3: "and",
      Home_checkboxTxt4: "Privacy Policy.",
      Order_data: "Order date:",
      Order_rate: "Exchange rate:",
      Order_statusLong: "Order processing status",
      Order_statusShort: "Status:",
      Order_pay: "PAY THE ORDER",
      Order2_congrat:
        "Congratulations! You have almost completed the exchange, to complete it, follow these steps",
      Order2_toFinish1: "To complete the transaction",
      Order2_toFinish2: "for the amount of:",
      Order2_toFinish3: "you will need to do the following:",
      Order2_inst1: "Make a payment using the details provided below",
      Order2_inst2: "Wait for the transaction to be confirmed on the network.",
      Order2_inst3: "Wait for your funds to be transferred",
      Order2_attention1: "Attention! ",
      Order2_attention2:
        "Before paying, open your Email and check the wallet number specified below with the number received in the Email message. The wallet numbers must match. If they do not match, do not make the payment and contact support! Verification of the wallet number is MANDATORY.",
      Order2_qr1: "Currency:",
      Order2_qr2: "Details:",
      Order2_qr3: "Copy address",
      Order2_t1:
        "* Depending on the country, funds are issued at the office or through a representative.",
      Order2_t2:
        "* For amounts above $10,000 in equivalent, an exchange is possible at the office or with the participation of a representative. This option is individual and depends on a number of factors.",
      Order2_t3:
        "* REMEMBER cryptocurrency transactions are not revocable. Carefully check the address to which you send funds. We will not be able to return funds if they are sent to the wrong wallet.",
      Order2_t4:
        "* The transaction is considered confirmed after 3 confirmations for the Bitcoin network.",
      Order2_cancel: "CANCEL ORDER",
      Order2_paid: "ORDER PAID",
      History_1: "DATE",
      History_2: "SENT",
      History_3: "AMOUNT",
      History_4: "RECEIVED",
      History_5: "STATUS",
      Login_1: "Login",
      Login_2: "Registration",
      Login_3: "Password",
      Login_4: "Forgot your password?",
      Login_5: "Remember me",
      Login_6: "LOGIN",
      Registration_1: "Repeat password",
      Registration_2: "I have read and agree to the terms of service",
      Registration_3: "REGISTER",
    },
  },
  ru: {
    translation: {
      Home: "Домой",
      History: "История",
      FAQ: "FAQ",
      TermsOfService: "Условия",
      Support: "Поддержка",
      SignIn: "Вход",
      SignUp: "Регистрация",
      LogOut: "Выйти",
      CardOneMain: "Поддержка 24/7",
      CardOneTxt:
        "Наша служба поддержки готова помочь вам в любое время суток.",
      CardTwoMain: "Лучшие курсы на рынке",
      CardTwoTxt:
        "Мы сотрудничаем более чем с 20 площадками для крипто торговли, чтобы предложить вам самые выгодные курсы.",
      CardThreeMain: "Быстрые транзакции",
      CardThreeTxt:
        "Средняя скорость транзакции составляет 5-40 минут, что позволяет оперативно воспользоваться рыночными возможностями",
      HomeQuestionsBlock1: "Почему стоит доверять USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA- это сервис мгновенного и анонимного обмена криптовалюты, который существует на рынке с 2015 года. За это время миллионы пользователей успешно воспользовались нашим криптообменником, и сегодня мы предлагаем услуги быстрого обмена и покупки криптовалют более 2,6 миллионам довольных клиентов ежемесячно. Для того, чтобы улучшить функционирование нашего криптообменника, мы сотрудничаем с ведущими компаниями отрасли. Квалифицированные сотрудники службы поддержки USDTASIA работают круглосуточно и без выходных, чтобы в любое время помочь вам со всеми вопросами, связанными с обменом.",
      HomeQuestionsBlock2: "Как обменять криптовалюту",
      HomeAnswersBlock2:
        "1. Установите обменную пару<br />Выберите пару для обмена.<br /><br />" +
        "2. Введите адрес вашего кошелька<br />Введите адрес криптокошелька, на который будет отправлена ваша криптовалюта.<br /><br />" +
        "3. Совершите платеж<br />Отправьте криптовалюту, которую хотите обменять, на адрес, который видите на экране.<br /><br />" +
        "4. Дождитесь поступления средств<br />Отслеживайте ход вашего обмена. Вы получите свою криптовалюту или фиатные денежные средства в ближайшее время.",
      HomeQuestionsBlock3: "Как скоро я получу свою криптовалюту?",
      HomeAnswersBlock3:
        "В среднем, процесс обмена криптовалюты занимает от 15 до 60 минут. Однако в случае загруженности определенного блокчейна это время может увеличиться.",
      HomeQuestionsBlock4: "Какие криптовалюты вы поддерживаете?",
      HomeAnswersBlock4:
        "Пользователи имеют возможность покупать и обменивать более 500 криптовалют в несколько кликов по лучшим транзакционными тарифам. Поскольку криптовалютный рынок развивается очень быстро, мы непрерывно расширяем список цифровых валют, доступных для быстрого обмена, покупки и продажи по лучшим курсам. Обменивайте и покупайте BTC, ETH, XRP, LTC и другие монеты из широкого спектра поддерживаемых криптовалют, выбрав удобный для вас способ оплаты (Visa, Mastercard, Apple Pay или банковский перевод).",
      HomeQuestionsBlock5: "Я не нашел свою валюту в списке. Что делать?",
      HomeAnswersBlock5:
        "Мы имеем разветвленную сеть агентов по выплате по всему миру, если сумма вашего обмена составляет более 10000 usdt – мы найдем для вас способ выплаты и оптимальный курс в любой валюте мира.",
      HomeQuestionsBlock6: "Есть ли у вас оптовый курс обмена?",
      HomeAnswersBlock6:
        "Для обмена сумм более 10000 usd у нас действует специальные тарифы. Напишите нам в онлайн-чат. Служба поддержки USDTASIA, как и сам сервис обмена работает круглосуточно и будет рад помочь вам.",
      AboutOurBrand: "О нас",
      AffilateProgram: "Сотрудничество",
      PrivacyPolicy: "Политика конфиденциальности",
      Order: "Заявка",
      PersonalInformation: "Персональная информация",
      Created: "Создан",
      Pending: "В ожидании",
      Cancelled: "Отменено",
      Success: "Оплачена",
      WhatShouldBeDone: "Что делать дальше",
      WhatShouldBeDone1:
        "Проверьте введенные данные, они будут нужны в случае возникновения вопросов с обменом.",
      WhatShouldBeDone2:
        "Нажмите на кнопку оплатить заявку и следуйте дальнейшим инструкциям.",
      WhatShouldBeDone3: "После оплаты напишите оператору про оплату.",
      WhatShouldBeDone4: "Дождитесь поступления на счет или кошелек.",
      Terms_h: "Условия обслуживания и Политика конфиденциальности USDTAsia",
      Terms_allTxt:
        "<br /> 1. Стороны соглашения.<br /><br />" +
        " 1.1 Договор заключается между Интернет-сервисом по обмену Электронных Активов usdtasia далее Сервис, с одной стороны, и Пользователь, в лице того, кто воспользовался услугами Сервиса, с другой.<br /><br />" +
        "2. Список терминов.<br /><br />" +
        "2.1. Сервис система предоставления интернет-услуг по обмену, продаже и покупке цифровых и/или электронных валют. <br /><br />" +
        "2.2. Пользователь это любое физическое лицо, использующее услуги сервиса<br /><br />" +
        "2.3. Заявка выражение намерения Пользователя воспользоваться одной из услуг предлагаемых Сервисом, путем заполнения электронной формы через Интернет-сайт Сервиса, на условиях, описанных в Соглашении и указанных в параметрах этой Заявки. <br /><br />" +
        "2.4. Электронная единица учетная единица соответствующих систем электронных расчетов, обозначающая определенный объем прав требования или иных прав, вытекающих из договора систем электронных расчетов со своими пользователями. <br /><br />" +
        "3. Предмет соглашения.<br /><br />" +
        "3.1. Предметом настоящего Соглашения является предоставление Пользователю Сервисом услуги по обмену Электронных единиц. <br /><br />" +
        "4. Общие условияя<br /><br />" +
        "4.1.Данное соглашение регламентирует отношения между Пользователем и Сервисом по поводу услуг, предоставляемых Сервисом Пользователю, и отменяет все предшествующие договоренности между Сервисом и Пользователем по данному предмету.<br /><br />" +
        "4.2. Данное соглашение вступает в действие с момента завершения формирования Заявки Пользователем.<br /><br />" +
        "4.3 Данное соглашение обе стороны, в лице Сервиса и Пользователя, принимают как равноценный по юридической силе договор, обозначенный в письменной форме.<br /><br />" +
        "4.4. Сервис оставляет за собой право в одностороннем порядке вносить изменения в данное соглашение без соответствующего уведомления об этом Пользователя, но с обязательной публикацией актуальной версии соглашения на данной странице.<br /><br />" +
        "4.5. Данное соглашения включает в себя пункты и подпункты правил, описанные в статьях 'Правила зачисления криптовалютных депозитов' и 'Правила Возврата'. <br /><br />" +
        "5. Условия предоставления услуг <br /><br />" +
        "5.1. Если на счет Сервиса поступает сумма, отличающаяся от указанной в заявке, Сервис делает перерасчет, который соответствует фактическому поступлению Электронных единиц. Большинство направлений сервиса осуществляются в автоматическом режиме, при создании Заявки ручного направления обмена нужно убедится, что оператор работает (в противном случае, будет произведена выплата в рабочее время оператора). Обработка криптовалюты происходит после достижения определенного Биржей количества подтверждений сети в зависимости от конкретного случая. Нужное количество подтверждений сети для зачисления Криптовалютных Активов указано в статье 'Правила зачисления криптовалютных депозитов'.<br /> <br />" +
        "5.2. В случае, если Пользователь требует Возврат, он проходит по правилам, описанными в статье 'Правила Возврата'.<br /><br />" +
        "5.3. В случае аннулирования соглашения или поступление ошибочного платежа, Возврат Электронных единиц производится в течение 72 часов с момента согласия на Возврат.<br /><br />" +
        "5.4. Если Электронные единицы не поступают от Пользователя на счет Сервиса в течение указанного срока, с момента подачи заявки Пользователем, соглашение между сторонами расторгается Сервисом с одной стороны, так как договор не вступает в действие. Если Электронные единицы поступают на реквизиты Сервиса после указанного срока, то такие средства подлежат Возврату согласно 'Правилам Возврата' после обращение Пользователя или Сервис восстанавливает Заявку Пользователя с его согласия .<br /><br />" +
        "5.5. Если происходит задержка перевода средств на реквизиты, указанные Пользователем, по вине расчетной системы, Сервис не несет ответственности за ущерб, возникающий в результате долгого поступления денежных средств. В этом случае Пользователь должен согласиться с тем, что все претензии будут предъявляться к расчетной системе, а Сервис оказывает свою помощь по мере своих возможностей в рамках закона. <br /> <br />" +
        "5.6. В случае пользования услугами Сервиса, Пользователь полностью соглашается с тем, что Сервис несет ограниченную ответственность соответствующую рамкам настоящих правил полученных титульных знаков и не дает дополнительных гарантий Пользователю, а также не несет перед ним дополнительной ответственности. Соответственно Пользователь не несет дополнительной ответственности перед Сервисом. <br /> <br />" +
        "5.7. Сервис не несет ответственности за ущерб и последствия при ошибочном переводе Электронных единиц в том случае, если Пользователь указал при создании Заявки неверные реквизиты. <br /> <br />" +
        "5.8. Рекламации по платежам принимаются не позже 2 часов после осуществления платежа. Стоимость услуги поиска и возврата ошибочных платежей – 500 usdt. <br /> <br />" +
        "5.8.1. Если Клиент указывает банковскую карту, выпущенную финансовым институтом, который не совпадает с банком, выбранным в направлении операции обмена, либо совершает ошибку в указаных реквизитах получателя, в соответствии с условиями предоставления услуг, Клиент обязан оплатить комиссию в размере 100 usdt за обработку рекламационного требования, возникшего в результате данного несоответствия. <br /> <br />" +
        "5.9.Категорически запрещается пользоваться услугами Сервиса для проведения незаконных переводов и мошеннических действий. При заключении настоящего договора, Пользователь обязуется выполнять эти требования и в случае мошенничества нести уголовную ответственность, установленную законодательством. <br /> <br />" +
        "6.10. По первому требованию Сервис вправе передавать информацию о переводе Электронных единиц правоохранительным органам, администрации платежных систем, а также жертвам неправомерных действий, пострадавшим в результате доказанного судебными органами мошенничества. <br /> <br />" +
        "5.11. Пользователь обязуется представить все документы, удостоверяющие его личность, в случае подозрения о мошенничестве и отмывании денег. <br /> <br />" +
        "5.12. Пользователь обязуется не вмешиваться в работу Сервиса и не наносить урон его программной и аппаратной части, а также Пользователь обязуется передавать точные сведения для обеспечения выполнения Исполнителем всех условий договора. <br /> <br />" +
        "5.13. Пользователь обязуется выполнять нормы соответствующие законодательству, а также не подделывать коммуникационные потоки и не создавать препятствий для нормальной работы программного кода Сервиса. <br /> <br />" +
        "5.14. Пользователю запрещается производить обмены в пользу третьих лиц. <br /> <br /> " +
        "5.15. В случае подозрительных операций у Пользователя могут запросить верификацию. <br /> <br />" +
        "5.16. В случае использование банковских карт с комиссией с получателя (за использование кредитного лимита, карты для социальных выплат и т.д.) комиссию оплачивает получатель, сервис обмена не несет по таким комиссиям никакой ответственности. <br /> <br />" +
        "5.17. Все платежи, осуществляемые в фиатных валютах, производятся без применения десятичных долей." +
        "6. Непредвиденные обстоятельства. <br /> <br />" +
        "6.1 В случае, когда в процессе обработки Заявки Пользователя возникают непредвиденные обстоятельства, способствующие невыполнению Сервисом условий договора, сроки выполнения заявки переносятся на соответствующий срок длительности форс-мажора. За просроченные обязательства Сервис ответственности не несет. К непредвиденным обстоятельствам могут быть отнесены любые факторы, которые не зависят от Сервиса. <br /> <br />" +
        "6.2 В случае если клиенту не пришел международный перевод, нами будет совершен возврат средств, строк возврата 10 рабочих дней. <br /> <br />" +
        "7. Претензии и споры. <br /> <br />" +
        "7.1 Претензии по настоящему соглашению принимаются Сервисом в форме электронного письма, в котором Пользователь указывает суть претензии или в чате технической поддержки Пользователей. <br /> <br />" +
        "8. Отказ от обязательств. <br /> <br />" +
        "8.1. Сервис имеет право отказа на заключение договора и выполнение Заявки без объяснения причин. <br /> <br />" +
        "9. Хранение и обработка персональных данных <br /> <br />" +
        "9.1. Для проведения операций Сервис принимает от Пользователя его персональные данные, которые Сервис обязуется хранить в зашифрованном виде, не придавать огласке, не передавать третьим лицам, за исключением случаев, описанных п.5.9. настоящего соглашения. <br /> <br />" +
        "9.2. Сервис имеет право при необходимости самостоятельно осуществлять деятельность по сбору дополнительных данных о Пользователе любыми доступными способами. Вся информация, собранная в результате такой деятельности не придается огласке, не передается третьим лицам, за исключением случаев, описанных в п.5.9. настоящего соглашения. <br /> <br />" +
        "9.3. Сервис имеет право передавать персональные данные Пользователя и детали совершенных им операций при условии сохранения их конфиденциального статуса по официальному письменному запросу Биржи или Системы электронных расчетов / решению суда / собственной инициативе (в случае возникновения потребности в проведении расследования) правоохранительным органам, а также Пользователю, которому они принадлежат. <br /> <br />" +
        "9.4. Все собранные данные о Пользователе, а также детали совершенных им операций, хранятся в базе данных Сервиса в течение пяти лет с момента выполнения Сервисом последней Заявки Пользователя",
      Support_q1: "Связь с техподдержкой сайта — это быстро и легко!",
      Support_q2: "Внимание! Мы никогда не пишем первыми!",
      Support_q3: "Онлайн 24/7",
      Support_a1:
        "Наша команда сайта поможет вам решить любой ваш вопрос, поддержка Clean Exchange опытная, квалифицированная и надёжная команда. Выберите подходящий и комфортный для вас способ связи и напишите нашим операторам на e-mail, telegram или в окно-чата на сайте! Вы получите ответ быстро и чётко, это так просто!",
      Support_a2:
        "В социальных сетях присутствует большое количество мошенников, которые будут стараться присвоить ваши денежные средства, притворяясь нами. Важно знать, что мы никогда не отправляем заявок на добавление и не отправляем никаких вредоносных ссылок. Отличным способом обезопасить себя будет добавление к нам только по ссылке с сайта, а не через поиск. В противном случае мы не гарантируем, что вы будете общаться с нами, а не с мошенниками, целью которых является получение ваших персональных данных",
      Support_a3:
        "В нашем сервисе вы получаете поддержку 24/7, вы можете задать любой вопрос нашим операторам, вне зависимости курс биткоина на данный момент или у вас возникла техническая ошибка при переводе, наши сотрудники всегда готовы вам ответить! Несмотря на всё, работоспособность наших специалистов находится на высочайшем уровне. А их количество позволяет организовать круглосуточную работу службы поддержки – без обедов, праздников и выходных дней",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia",
      Support_a6: "24/7 – чат на сайте",
      Affilate_h: "Сотрудничество",
      Affilate_txt1:
        "Партнёрская программа позволяет зарегистрированным пользователям зарабатывать на партнерских отчислениях от обменов клиентов, которые перешли на наш сайт по реферальной ссылке. Участие в программе достаточно простое. Вам необходимо зарегистрироваться на нашем сайте. И написать в техподдержку, вам выдадут вашу персональную ссылку для осуществления обмена. Партнёрский процент зависит от общей суммы обменов ваших рефералов и будет меняться по таблице:",
      Affilate_txt2:
        "Вывод партнерской прибыли осуществляется каждый день. Минимальная сумма для вывода — 10$.",
      Affilate_level: "Уровень",
      Affilate_refs: "Общая сумма обменов рефералов",
      Affilate_yours: "Ваша",
      Home_checkboxTxt1: "Используя сайт и создавая обмен, вы соглашаетесь с",
      Home_checkboxTxt2: "Условиями обслуживания",
      Home_checkboxTxt3: "и",
      Home_checkboxTxt4: "Политикой конфиденциальности UsdtAsia.",
      Order_data: "Дата заявки:",
      Order_rate: "Курс обмена:",
      Order_statusLong: "Статус обработки заявки",
      Order_statusShort: "Статус:",
      Order_pay: "ОПЛАТИТЬ ЗАЯВКУ",
      Order2_congrat:
        "Поздравляем! Вы почти завершили обмен, для завершения, проделайте следующие шаги",
      Order2_toFinish1: "Для совершения операции",
      Order2_toFinish2: "на сумму:",
      Order2_toFinish3: "вам потребуется выполнить следующие действия:",
      Order2_inst1: "Совершите оплату по предоставленным ниже реквизитам",
      Order2_inst2: "Дождаться подтверждения транзакции в сети.",
      Order2_inst3: "Ожидайте перевода ваших средств",
      Order2_attention1: "Внимание! ",
      Order2_attention2:
        "Перед тем как оплатить, откройте Ваш Email и сверьте номер кошелька указанный ниже, с номером полученным в Email сообщении. Номера кошельков обязаны совпадать. В случае несовпадения, не выполняйте платеж и свяжитесь с поддержкой! Проверка номера кошелька ОБЯЗАТЕЛЬНА.",
      Order2_qr1: "Валюта:",
      Order2_qr2: "Реквизиты:",
      Order2_qr3: "Копировать адресс",
      Order2_t1:
        "* В зависимости от страны, выдача средств происходит в офисе либо через представителя.",
      Order2_t2:
        "* Для сумм выше 10 000$ в эквиваленте возможен обмен в офисе либо при участии представителя. Данная опция является индивидуальной и зависит от ряда факторов.",
      Order2_t3:
        "* ПОМНИТЕ криптовалютные транзакции являются не отзывными. Внимательно проверьте адрес, на который Вы отправляете средства. Мы не сможем вернуть средства, если они будут отправлены на неверный кошелек.",
      Order2_t4:
        "* Транзакция считается подтвержденной после 3х подтверждений для сети Bitcoin.",
      Order2_cancel: "ОТМЕНИТЬ ЗАЯВКУ",
      Order2_paid: "Я ОПЛАТИЛ(А) ЗАЯВКУ",
      History_1: "ДАТА",
      History_2: "ОТДАЕТЕ",
      History_3: "СУММА",
      History_4: "ПОЛУЧАЕТЕ",
      History_5: "СТАТУС",
      Login_1: "Логин",
      Login_2: "Регистрация",
      Login_3: "Пароль",
      Login_4: "Забыли пароль?",
      Login_5: "Запомнить меня",
      Login_6: "ВОЙТИ",
      Registration_1: "Пароль еще раз",
      Registration_2: "С правилами сервиса ознакомлен и согласен",
      Registration_3: "ЗАРЕГИСТРИРОВАТЬСЯ",
    },
  },
  zh: {
    translation: {
      Home: "家",
      History: "历史",
      FAQ: "常问问题",
      TermsOfService: "服务条款",
      Support: "支持",
      SignIn: "登入",
      SignUp: "注册",
      LogOut: "登出",
      CardOneMain: "24/7 支持",
      CardOneTxt: "我们的支持团队无论白天还是晚上，都可以为您提供帮助。",
      CardTwoMain: "市场上最优惠的价格",
      CardTwoTxt: "我们与 20 多个加密货币交易平台合作，为您提供最优惠的价格。",
      CardThreeMain: "快速交易",
      CardThreeTxt: "平均交易速度5-40分钟，让您快速把握市场先机。",
      HomeQuestionsBlock1: "为什么要信任 USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA 是一种即时匿名的加密货币兑换服务，自 2018 年上市以来一直如此。在此期间，数百万用户成功使用了我们的加密货币交易所，如今我们每月为超过 260 万满意的客户提供快速的加密货币兑换和购买服务。为了改善我们的加密货币交易所的功能，我们与行业领先的公司合作。USDTASIA 的合格支持人员 24/7 全天候待命，随时为您解决所有与交易所相关的问题。",
      HomeQuestionsBlock2: "如何兑换加密货币",
      HomeAnswersBlock2:
        "1. 1.设置兑换对<br />选择需要兑换的货币对<br /><br />" +
        "2. 输入您的钱包地址<br />输入您将要发送加密货币的加密货币钱包的地址<br /><br />" +
        "3. 付款<br />将您想要兑换的加密货币发送到您在屏幕上看到的地址<br /><br />" +
        "4. 等待资金到账<br />跟踪您的兑换进度。您将尽快收到您的加密货币或法定货币",
      HomeQuestionsBlock3: "我多久可以得到我的加密货币？",
      HomeAnswersBlock3:
        "平均而言，加密货币兑换过程需要 15 到 60 分钟。但是，如果某个区块链 ",
      HomeQuestionsBlock4: "你们支持哪些加密货币？",
      HomeAnswersBlock4:
        "用户只需点击几下鼠标，即可以最佳交易汇率购买和兑换 500 多种加密货币。由于加密货币市场发展非常迅速，我们正在不断扩大可供快速兑换、以最佳汇率购买和出售的数字货币列表。通过选择方便的付款方式（Visa、Mastercard、Apple Pay 或银行转账），从广泛的受支持的加密货币中兑换和购买 BTC、ETH、XRP、LTC 和其他硬币。",
      HomeQuestionsBlock5: "我在列表中找不到我的货币。我该怎么办？",
      HomeAnswersBlock5:
        "We have an extensive network of payout agents all over the world, if your exchange amount is more than 10000 usdt - we will find for you a way of payment and the best rate in any currency of the world",
      HomeQuestionsBlock6: "Do you have wholesale exchange rates?",
      HomeAnswersBlock6:
        "我们在世界各地拥有广泛的支付代理网络，如果您的兑换金额超过 10,000 美元 - 我们将为您找到一种付款方式以及世界上任何货币的最佳汇率",
      AboutOurBrand: "关于我们的品牌 ",
      AffilateProgram: "联盟计划",
      PrivacyPolicy: "隐私政策",
      Order: "应用",
      PersonalInformation: "个人信息",
      Created: "创建",
      Pending: "待办的",
      Cancelled: "取消",
      Success: "成功",
      WhatShouldBeDone: "下一步做什么：",
      WhatShouldBeDone1:
        "验证输入的数据，如果您在交易时遇到任何问题，您都需要它",
      WhatShouldBeDone2: "点击支付申请按钮并按照进一步的说明进行操作",
      WhatShouldBeDone3: "付款后，写信给接线员有关付款的信息",
      WhatShouldBeDone4: "等待收款到您的账户或钱包",
      Terms_h: "USDTAsia 的服务条款和隐私政策。",
      Terms_allTxt:
        "<br /> 1.本协定缔约方。<br /><br />" +
        " 1.1 本协议由 usdtasia 电子资产交易互联网服务（以下简称“服务”）与使用本服务的用户（以下简称“用户”）签订。<br /><br />" +
        "2. 术语列表。<br /><br />" +
        "2.1. 该服务是提供用于兑换、销售和购买数字和/或电子货币的互联网服务的系统。 <br /><br />" +
        "2.2. 用户是使用本服务的任何自然人<br /><br />" +
        "2.3.申请是用户使用服务提供的某项服务的意愿表达，通过服务网站填写电子表格，按照协议中描述的条款和条件以及本申请的参数指定 <br /><br />" +
        "2.4.电子单位是各电子结算系统的记账单位，表示电子结算系统与其用户之间达成的协议所产生的一定数额的债权或其他权利 <br /><br />" +
        "3.协议的主题。<br /><br />" +
        "3.1. 本协议的宗旨是向服务用户提供电子单位交换服务。 <br /><br />" +
        "4. 一般条款和条件<br /><br />" +
        "4.1.本协议规范用户和服务之间关于服务向用户提供的服务的关系，并取消服务与用户之间关于此主题的所有先前协议<br /><br />" +
        "4.2. 本协议自用户完成应用程序组建之日起生效<br /><br />" +
        "4.3 以服务和用户为代表的双方均接受本协议作为具有同等效力的书面合同。<br /><br />" +
        "4.4. 服务保留单方面修改本协议的权利，无需向用户发出适当通知，但必须在本页面上发布本协议的最新版本。<br /><br />" +
        "4.5.本协议包括“加密货币存款规则”和“退款规则”条款中描述的规则的条款及细则。 <br /><br />" +
        "5. 服务条款 <br /><br />" +
        "5.1. 如果服务账户收到的金额与申请中指定的金额不同，服务将重新计算与实际收到的电子单位相对应的金额。服务的大多数指示都是以自动模式进行的，在创建手动指示交易的申请时，必须确保操作员正在工作（否则，将在操作员的工作时间内付款）。加密货币处理在达到交易所定义的网络确认数后进行，具体取决于具体情况。记入加密货币资产所需的网络确认数在“加密货币存款规则”一文中指定。<br /> <br />" +
        "5.2.如果用户要求退款，则遵循“退款规则”中所述的规则。<br /><br />" +
        "5.3. 如果取消协议或收到错误付款，电子单元将在协议之日起 72 小时内退还。<br /><br />" +
        "5.4.如果在规定的时间内，服务账户中没有收到用户的电子单位，则从用户申请之日起，服务一方面终止双方之间的协议，因为协议不生效。如果在规定的期限后将电子单位转移到服务的账户，则在用户申请或服务在用户同意的情况下恢复用户的申请后，这些资金将根据“退款规则”退还。<br /><br />" +
        "5.5.如果由于结算系统故障导致资金延迟转入用户指定账户，服务不对因资金延迟而造成的损失负责。在这种情况下，用户应同意所有索赔均由结算系统处理，服务将在法律允许的范围内尽力提供帮助。<br /> <br />" +
        "5.6. 在使用本服务时，用户完全同意本服务在本规则框架内承担有限责任，不向用户提供额外担保，也不对用户承担额外责任。因此，用户不对本服务承担额外责任。 <br /> <br />" +
        "5.7.如果用户在创建应用程序时指定了错误的详细信息，则由于错误传输电子单元而造成的损害和后果，服务不承担责任。 <br /> <br />" +
        "5.8.付款索赔最迟在付款后 2 小时内受理。错误付款的查询和退款服务费用为 500 美元。 <br /> <br />" +
        "5.8.1. 如果客户指定的银行卡由与兑换交易方向所选银行不符的金融机构发行，或者受益人的详细信息有误，则根据服务条款，客户有义务支付 100 美元的费用来处理由此差异引起的索赔 <br /> <br />" +
        "5.9.严禁使用本服务进行非法转账和欺诈行为。用户在签订本协议时承诺履行这些要求，并在发生欺诈行为时承担法律规定的刑事责任。 <br /> <br />" +
        "6.10. 一经请求，服务机构有权将有关电子单位转移的信息转交给执法机构、支付系统管理部门以及因司法机构证实的欺诈行为而遭受非法行为侵害的受害者 <br /> <br />" +
        "5.11. 用户承诺在怀疑存在欺诈和洗钱的情况下出示所有可证明其身份的文件 <br /> <br />" +
        "5.12. 用户承诺不干扰服务的运行，不损坏其软件和硬件，并且用户承诺提供准确的信息以确保承包商履行合同的所有条款和条件。 <br /> <br />" +
        "5.13. 用户有义务遵守法律规定的规范，不得篡改通信流程，不得对服务程序代码的正常运行造成障碍 <br /> <br />" +
        "5.14.用户不得与第三方进行交易 <br /> <br /> " +
        "5.15. 如果出现可疑交易，可能会要求用户进行验证。 <br /> <br />" +
        "5.16.如果使用银行卡时收取收款人的费用（使用信用额度、社会支付卡等），费用由收款人支付，兑换服务不承担此类费用的任何责任<br /> <br />" +
        "5.17. 所有以法定货币进行的付款均不使用小数 <br /> <br />" +
        "6. 意外事件。 <br /> <br />" +
        "6.1 如果在处理用户申请的过程中发生不可预见的情况，导致服务无法履行协议的条款和条件，则履行申请的期限将推迟不可抗力持续时间的相应时间。服务不对逾期义务负责。任何超出服务控制范围的因素都可能被视为不可预见的情况 <br /> <br />" +
        "6.2 如果客户没有收到国际转账，我们将退款，退款期限为 10 个工作日 <br /> <br />" +
        "7.索赔和争议。 <br /> <br />" +
        "7.1 本协议项下的索赔将以电子邮件的形式由服务接受，用户在电子邮件中指定索赔的实质，或在用户的技术支持聊天中接受。 <br /> <br />" +
        "8. 放弃义务 <br /> <br />" +
        "8.1.本服务有权拒绝签订合同和履行申请，无需给出任何理由。 <br /> <br />" +
        "9. 个人信息的存储和处理 <br /> <br />" +
        "9.1. 本服务接受用户的个人数据以执行操作，本服务承诺以加密形式存储这些数据，不公开，不转让给第三方，但本协议第 5.9 条所述情况除外。本协议第 5.9 条 <br /> <br />" +
        "9.2. 如有必要，服务有权通过任何可用手段独立开展活动以收集有关用户的额外数据。除本协议第 5.9 段所述外，此类活动收集的所有信息均不会公开，也不会转让给第三方。<br /> <br />" +
        "9.3.本服务有权将用户的个人数据和用户执行的交易的详细信息传输给执法机构，前提是其机密状态在交易所或电子结算系统的正式书面请求/法院判决/主动（需要调查的情况下）下得到保留，以及其所属的用户<br /> <br />" +
        "9.4. 所有收集到的有关用户的数据以及用户进行的交易的详细信息，应从服务执行最后一个用户订单之日起在服务的数据库中存储五年",
      Support_q1: "联系网站技术支持快捷又简单！",
      Support_q2: "注意！我们从不先写！",
      Support_q3: "24/7 在线",
      Support_a1:
        "我们的网站团队将帮助您解决任何问题，Clean Exchange 支持是经验丰富、合格且可靠的团队。选择合适且舒适的沟通方式，通过电子邮件、电报或网站上的聊天窗口给我们的操作员写信！您将快速而清楚地得到答复，就是这么简单！",
      Support_a2:
        "在社交网络中，有大量骗子会冒充我们，试图盗用您的钱财。重要的是要知道，我们绝不会发送添加请求或发送任何恶意链接。保护自己的一个好方法是只通过网站上的链接向我们添加，而不是通过搜索。否则，我们不能保证您将与我们交流，而不是与那些以窃取您的个人数据为目标的骗子交流。",
      Support_a3:
        "在我们的服务中，您可以获得 24/7 全天候支持，您可以向我们的操作员询问任何问题，无论当前的比特币汇率如何，或者您在翻译中遇到技术错误，我们的工作人员随时准备为您解答！尽管如此，我们专家的效率仍处于最高水平。他们的数量使我们能够组织全天候的支持服务工作 - 无需午餐、假期和周末。",
      Support_a4: "电报-@usdtasia_support",
      Support_a5: "邮箱 support@usdtasia.com",
      Support_a6: "24/7 - 在网站上聊天",
      Affilate_h: "联盟计划 ",
      Affilate_txt1:
        "联盟计划允许注册用户从通过推荐链接访问我们网站的客户的交易中赚取联盟版税。参与该计划非常简单。您需要在我们的网站上注册。并写信给技术支持，您将获得进行交易的个人链接。合作伙伴百分比取决于您推荐的交换总额，并将根据表格而有所不同：",
      Affilate_txt2: "联盟利润的提取每天都会进行。提取的最低金额为 10 美元。",
      Affilate_level: "等级",
      Affilate_refs: "推荐交换总量 ",
      Affilate_yours: "您的利润",
      Home_checkboxTxt1: "通过使用本网站并创建交易，您同意",
      Home_checkboxTxt2: "UsdtAsia 的服务条款",
      Home_checkboxTxt3: "和",
      Home_checkboxTxt4: "隐私政策。",
      Order_data: "订单日期：",
      Order_rate: "汇率：",
      Order_statusLong: "订单处理状态",
      Order_statusShort: "地位：",
      Order_pay: "支付订单",
      Order2_congrat:
        "恭喜！您几乎已经完成交换，要完成交换，请按照以下步骤操作",
      Order2_toFinish1: "完成交易",
      Order2_toFinish2: "金额为：",
      Order2_toFinish3: "您需要执行以下操作：",
      Order2_inst1: "使用下面提供的详细信息进行付款",
      Order2_inst2: "等待网络确认交易。",
      Order2_inst3: "等待资金转账",
      Order2_attention1: "注意力！ ",
      Order2_attention2:
        "付款前，请打开您的电子邮件，检查下面指定的钱包号码与电子邮件中收到的号码。钱包号码必须匹配。如果不匹配，请不要付款并联系客服！钱包号码验证是强制性的。",
      Order2_qr1: "货币：",
      Order2_qr2: "细节：",
      Order2_qr3: "复制地址",
      Order2_t1: "* 根据国家/地区的不同，资金将在办公室或通过代表发放。",
      Order2_t2:
        "*对于等值 10,000 美元以上的金额，可以在办公室或由代表进行兑换。此选项因人而异，取决于多种因素。",
      Order2_t3:
        "* 请记住，加密货币交易不可撤销。请仔细检查您发送资金的地址。如果资金被发送到错误的钱包，我们将无法退还资金。",
      Order2_t4: "* 比特币网络经过 3 次确认后，交易即被视为确认。",
      Order2_cancel: "取消订单",
      Order2_paid: "订单已付款",
      History_1: "日期",
      History_2: "捐赠",
      History_3: "数量",
      History_4: "接收",
      History_5: "地位",
      Login_1: "登录",
      Login_2: "登记",
      Login_3: "密码",
      Login_4: "忘记密码了吗？",
      Login_5: "记住账号",
      Login_6: "登录",
      Registration_1: "重复密码",
      Registration_2: "我已阅读并同意服务条款",
      Registration_3: "登记",
    },
  },
  uz: {
    translation: {
      Home: "Uy",
      History: "Tarix",
      FAQ: "TSS",
      TermsOfService: "Xizmat shartlari",
      Support: "Qo'llab-quvvatlash",
      SignIn: "tizimga kirish",
      SignUp: "Qo'shiq ayt",
      LogOut: "Chiqish",
      CardOneMain: "24/7 qo'llab-quvvatlash",
      CardOneTxt:
        "Bizning qo'llab-quvvatlash jamoamiz sizga kun yoki tunning istalgan vaqtida yordam berishga tayyor.",
      CardTwoMain: "Bozordagi eng yaxshi narxlar",
      CardTwoTxt:
        "Biz sizga eng qulay narxlarni taklif qilish uchun 20 dan ortiq kripto savdo platformalari bilan hamkorlik qilamiz.",
      CardThreeMain: "Tez operatsiyalar",
      CardThreeTxt:
        "O'rtacha tranzaksiya tezligi 5-40 daqiqani tashkil qiladi, bu sizga bozor imkoniyatlaridan tezda foydalanish imkonini beradi.",
      HomeQuestionsBlock1: "Nima uchun USDTASIA ga ishonish kerak?",
      HomeAnswersBlock1:
        "USDTASIA – tezkor va anonim kriptovalyuta almashinuvi xizmati boʻlib, u 2018-yildan beri bozorda mavjud. Shu vaqt ichida millionlab foydalanuvchilar kripto birjamizdan muvaffaqiyatli foydalanishdi va bugungi kunda biz har yili 2,6 milliondan ortiq mamnun mijozlarga tezkor kriptovalyuta almashinuvi va sotib olish xizmatlarini taklif etamiz. oy. Kripto birjamiz faoliyatini yaxshilash maqsadida biz sanoatning yetakchi kompaniyalari bilan hamkorlik qildik. USDTASIA ning malakali yordamchi xodimlari istalgan vaqtda almashinuvga oid barcha savollaringizga yordam berish uchun 24/7 ishlaydi.",
      HomeQuestionsBlock2: "Kripto valyutasini qanday almashtirish kerak",
      HomeAnswersBlock2:
        "1. 1.Almashtirish juftligini o'rnating<br />Almashtiriladigan juftlikni tanlang<br /><br />" +
        "2. Hamyoningiz manzilini kiriting<br />Kripto valyutangiz yuboriladigan kriptovalyuta hamyonining manzilini kiriting<br /><br />" +
        "3. Toʻlovni amalga oshiring<br />Oʻzingiz almashtirmoqchi boʻlgan kriptovalyutani ekranda koʻrgan manzilingizga yuboring<br /><br />" +
        "4. Mablag'lar kelishini kuting<br />Almashtirish jarayonini kuzatib boring. Siz kriptovalyuta yoki fiat pulingizni imkon qadar tezroq olasiz",
      HomeQuestionsBlock3: "Qanchalik tez orada kripto valyutasini olaman?",
      HomeAnswersBlock3:
        "O'rtacha kriptovalyuta almashinuvi jarayoni 15 dan 60 daqiqagacha davom etadi. Biroq, ma'lum bir blokcheyn bo'lsa, bu vaqt oshishi mumkin ",
      HomeQuestionsBlock4: "Qaysi kriptovalyutalarni qo'llab-quvvatlaysiz?",
      HomeAnswersBlock4:
        "Foydalanuvchilar bir necha marta bosish orqali 500 dan ortiq kriptovalyutalarni eng yaxshi tranzaksiya kurslarida sotib olishlari va almashtirishlari mumkin. Kriptovalyuta bozori juda tez rivojlanayotganligi sababli, biz tez almashish, eng yaxshi kurslarda sotib olish va sotish uchun mavjud raqamli valyutalar ro'yxatini doimiy ravishda kengaytirmoqdamiz. Qulay toʻlov usulini (Visa, Mastercard, Apple Pay yoki bank oʻtkazmasi) tanlash orqali qoʻllab-quvvatlanadigan kriptovalyutalarning keng assortimentidan BTC, ETH, XRP, LTC va boshqa tangalarni almashtiring va sotib oling.",
      HomeQuestionsBlock5:
        "Roʻyxatda oʻz valyutamni topa olmadim. Men nima qilaman?",
      HomeAnswersBlock5:
        "Bizda butun dunyo bo'ylab to'lov agentlarining keng tarmog'i mavjud, agar sizning ayirboshlash summangiz 10000 USD dan ortiq bo'lsa - biz siz uchun to'lov usulini va dunyoning istalgan valyutasida eng yaxshi kursni topamiz.",
      HomeQuestionsBlock6: "Sizda ulgurji valyuta kurslari bormi?",
      HomeAnswersBlock6:
        "Bizda 10 000 USD dan yuqori ayirboshlash uchun maxsus kurslar mavjud. Onlayn chatda bizga yozing. USDTASIA qo'llab-quvvatlash xizmati, shuningdek ayirboshlash xizmatining o'zi kechayu kunduz ishlaydi va sizga yordam berishdan mamnun bo'ladi.",
      AboutOurBrand: "About our brand ",
      AffilateProgram: "AFFILIATE dasturi",
      PrivacyPolicy: "Maxfiylik siyosati",
      Order: "Ilova",
      PersonalInformation: "Shaxsiy ma'lumot",
      Created: "Yaratilgan",
      Pending: "Kutilmoqda",
      Cancelled: "Bekor qilingan",
      Success: "Muvaffaqiyat",
      WhatShouldBeDone: "Keyinchalik nima qilish kerak:",
      WhatShouldBeDone1:
        "Kiritilgan ma'lumotlarni tekshiring, agar siz almashinuv bilan bog'liq muammolar mavjud bo'lsa, sizga kerak bo'ladi",
      WhatShouldBeDone2:
        "Ilovani to'lash tugmachasini bosing va keyingi ko'rsatmalarga amal qiling",
      WhatShouldBeDone3: "To'lovdan so'ng operatorga to'lov haqida yozing",
      WhatShouldBeDone4: "Hisobingizga yoki hamyoningizga kvitansiyani kuting",
      Terms_h: "USDTAsia ning Foydalanish shartlari va Maxfiylik siyosati.",
      Terms_allTxt:
        "<br /> 1. Bitim taraflari.<br /><br />" +
        " 1.1 Shartnoma, bir tomondan, bundan keyin Xizmat deb ataladigan elektron aktivlar usdtasia Internet-xizmati va boshqa tomondan, Xizmat xizmatlaridan foydalangan shaxs nomidagi Foydalanuvchi o'rtasida tuziladi. qo'l.<br /><br />" +
        "2. Atamalar ro'yxati.<br /><br />" +
        "2.1. Xizmat raqamli va/yoki elektron valyutalarni ayirboshlash, sotish va sotib olish bo'yicha Internet xizmatlarini taqdim etish tizimidir <br /><br />" +
        "2.2. Foydalanuvchi - Xizmat xizmatlaridan foydalanuvchi har qanday jismoniy shaxs<br /><br />" +
        "2.3. Ilova - Foydalanuvchining Xizmat veb-sayti orqali elektron shaklni to'ldirish orqali, Shartnomada ko'rsatilgan va ushbu Ilova parametrlarida ko'rsatilgan shartlar asosida Xizmat tomonidan taklif etilayotgan xizmatlardan biridan foydalanish niyatining ifodasidir. <br /><br />" +
        "2.4. Elektron birlik - elektron hisob-kitob tizimlarining foydalanuvchilari bilan kelishuvidan kelib chiqadigan talablarning yoki boshqa huquqlarning ma'lum miqdorini bildiruvchi tegishli elektron hisob-kitob tizimlarining hisob birligi <br /><br />" +
        "3. Shartnoma mavzusi.<br /><br />" +
        "3.1. Ushbu Shartnomaning predmeti xizmatdan foydalanuvchiga elektron birliklarni almashtirish xizmatini taqdim etishdan iborat. <br /><br />" +
        "4. Umumiy shartlar<br /><br />" +
        "4.1.Ushbu Shartnoma Foydalanuvchi va Xizmat o'rtasidagi Xizmat tomonidan Foydalanuvchiga taqdim etiladigan xizmatlar bo'yicha munosabatlarni tartibga soladi va Xizmat va Foydalanuvchi o'rtasida ushbu mavzu bo'yicha oldingi barcha kelishuvlarni bekor qiladi<br /><br />" +
        "4.2. Ushbu shartnoma Foydalanuvchi ilovani shakllantirishni yakunlagan paytdan boshlab kuchga kiradi<br /><br />" +
        "4.3 Xizmat va Foydalanuvchi tomonidan taqdim etilgan ikkala tomon ham ushbu shartnomani yozma ravishda ekvivalent shartnoma sifatida qabul qiladilar.<br /><br />" +
        "4.4. Xizmat foydalanuvchini tegishli ogohlantirmasdan, lekin shartnomaning joriy versiyasini ushbu sahifada majburiy e'lon qilgan holda bir tomonlama tartibda ushbu shartnomaga o'zgartirishlar kiritish huquqini o'zida saqlab qoladi.<br /><br />" +
        "4.5. Ushbu shartnoma 'Kriptovalyuta depozitlari qoidalari' va 'To'lovni qaytarish qoidalari' moddalarida tavsiflangan qoidalarning bandlari va kichik bandlarini o'z ichiga oladi. <br /><br />" +
        "5. Foydalanish shartlari <br /><br />" +
        "5.1. Agar Xizmat hisobvarag'iga arizada ko'rsatilgan summadan farq qiladigan summa kelib tushsa, Xizmat elektron birliklarning haqiqiy tushumiga to'g'ri keladigan qayta hisob-kitobni amalga oshiradi. Xizmat ko'rsatish yo'nalishlarining aksariyati avtomatik rejimda amalga oshiriladi, qachonki Birjaning qo'lda yo'nalishi uchun ariza yaratish, operator ishlayotganiga ishonch hosil qilish kerak (aks holda, Cryptocurrency qayta ishlash operatorning ish vaqtida amalga oshiriladi). muayyan holatga qarab, birja tomonidan belgilangan tarmoq tasdiqlashlari soniga erishish Kriptovalyuta aktivlarini kreditlash uchun kerakli miqdordagi tarmoq tasdiqlashlari “Kriptovalyuta depozitlari qoidalari” maqolasida ko'rsatilgan.<br /> <br />" +
        "5.2.Agar foydalanuvchi to'lovni qaytarishni talab qilsa, u 'To'lovni qaytarish qoidalari' maqolasida tasvirlangan qoidalarga amal qiladi.<br /><br />" +
        "5.3. Shartnoma bekor qilingan yoki noto'g'ri to'lov olingan taqdirda, Elektron birliklar Qaytish uchun kelishilgan kundan boshlab 72 soat ichida qaytariladi.<br /><br />" +
        "5.4. Agar Foydalanuvchidan Xizmat akkaunti bo‘yicha belgilangan muddatda Elektron birliklar olinmasa, Foydalanuvchi murojaat qilgan paytdan e’tiboran tomonlar o‘rtasidagi shartnoma bir tomondan Xizmat tomonidan shartnoma sifatida bekor qilinadi. Agar Elektron birliklar ko'rsatilgan muddatdan keyin Xizmat hisobiga o'tkazilsa, foydalanuvchining arizasi yoki Xizmat tomonidan foydalanuvchining to'lovlari tiklanganidan keyin bunday mablag'lar 'To'lovni qaytarish qoidalari'ga muvofiq qaytarilishi kerak. Foydalanuvchining roziligi bilan ariza.<br /><br />" +
        "5.5. Hisob-kitob tizimining aybi tufayli Foydalanuvchi tomonidan ko'rsatilgan rekvizitlarga pul mablag'larini o'tkazishda kechikish bo'lsa, Xizmat pul mablag'larini uzoq vaqt davomida olish natijasida etkazilgan zarar uchun javobgar bo'lmaydi. Bunda Foydalanuvchi rozi bo'lishi kerak: barcha da'volar hisob-kitob tizimiga keltiriladi va Xizmat qonun doirasida o'z imkoniyatlaridan kelib chiqqan holda yordam ko'rsatadi" +
        "5.6. Xizmat xizmatlaridan foydalanganda Foydalanuvchi Xizmat ushbu qoidalar doirasida olingan nom birliklari doirasida cheklangan javobgarlikka ega ekanligiga to'liq rozi bo'ladi va Foydalanuvchiga qo'shimcha kafolatlar bermaydi, shuningdek, xizmat ko'rsatmaydi. Foydalanuvchiga qo'shimcha javobgarlik Shunga ko'ra, Foydalanuvchi Xizmatga nisbatan qo'shimcha javobgarlikni o'z zimmasiga olmaydi" +
        "5.7.Xizmat, agar foydalanuvchi Ilovani yaratishda noto'g'ri ma'lumotlarni ko'rsatgan bo'lsa, Elektron birliklar noto'g'ri o'tkazilganda etkazilgan zarar va oqibatlar uchun javobgar emas. <br /> <br />" +
        "5.8. To'lovlar bo'yicha da'volar to'lov amalga oshirilgandan keyin 2 soatdan kechiktirmay qabul qilinadi. Xato to'lovlarni qidirish va qaytarish xizmatining narxi 500 USD. <br /> <br />" +
        "5.8.1. Agar Mijoz birja operatsiyasi yoʻnalishi boʻyicha tanlangan bankka mos kelmaydigan moliya muassasasi tomonidan chiqarilgan bank kartasini koʻrsatsa yoki benefitsiarning koʻrsatilgan rekvizitlarida xatolikka yoʻl qoʻygan boʻlsa, bunda ushbu shartnoma shartlariga muvofiq. Ushbu nomuvofiqlik natijasida kelib chiqqan da'voni ko'rib chiqish uchun mijoz 100 AQSh dollari miqdorida yig'im to'lashi shart <br /> <br />" +
        "5.9.Xizmatdan noqonuniy o'tkazmalar va firibgarlik harakatlari uchun foydalanish qat'iyan man etiladi. Ushbu shartnomani tuzishda Foydalanuvchi ushbu talablarni bajarishga va firibgarlik sodir etilgan taqdirda qonun bilan belgilangan jinoiy javobgarlikka tortish majburiyatini oladi. <br /> <br. />" +
        "6.10. Xizmat birinchi so‘rov bo‘yicha Elektron bloklarni o‘tkazish to‘g‘risidagi ma’lumotlarni huquqni muhofaza qiluvchi organlarga, to‘lov tizimlari ma’muriyatiga, shuningdek, sud organlari tomonidan isbotlangan firibgarlik natijasida jabrlangan noqonuniy xatti-harakatlardan jabrlanganlarga topshirishga haqli. <br /> <br />" +
        "5.11. Foydalanuvchi firibgarlik va pul yuvishda gumon qilingan taqdirda uning shaxsini tasdiqlovchi barcha hujjatlarni taqdim etish majburiyatini oladi <br /> <br />" +
        "5.12. Foydalanuvchi Xizmatning ishlashiga xalaqit bermaslik va uning dasturiy va texnik vositalariga zarar bermaslik majburiyatini oladi, Foydalanuvchi esa Pudratchi shartnomaning barcha shartlari va shartlarini bajarishini ta'minlash uchun aniq ma'lumotlarni taqdim etishga majburdir. <br / > <br />" +
        "5.13. Foydalanuvchi qonun hujjatlariga mos keladigan me'yorlarga rioya qilishi, shuningdek, aloqa oqimlarini buzmaslik va Xizmat dastur kodining normal ishlashi uchun to'siqlar yaratmasligi shart <br /> <br / >" +
        "5.14. Foydalanuvchiga uchinchi shaxslar foydasiga ayirboshlash taqiqlanadi <br /> <br /> " +
        "5.15. Shubhali tranzaktsiyalar sodir bo'lgan taqdirda, foydalanuvchidan tekshirish so'ralishi mumkin. <br /> <br />" +
        "5.16.Qabul qiluvchidan komissiya olinib bank kartalaridan foydalanilganda (kredit limitidan foydalanganlik uchun, ijtimoiy to‘lovlar uchun kartalar va boshqalar) yig‘im oluvchi tomonidan to‘langan bo‘lsa, ayirboshlash xizmati bunday to‘lovlar uchun javobgarlikni o‘z zimmasiga olmaydi. to'lovlar <br /> <br />" +
        "5.17. Fiat valyutalarida amalga oshirilgan barcha to'lovlar o'nlik kasrlardan foydalanmasdan amalga oshiriladi <br /> <br />" +
        "6. Kutilmagan holatlar. <br /> <br />" +
        "6.1 Agar foydalanuvchining arizasini ko'rib chiqish jarayonida Xizmat tomonidan Shartnoma shartlarini bajarmasligiga olib keladigan kutilmagan holatlar yuzaga kelsa, arizani bajarish muddatlari fors-major holatlarining tegishli davriga qoldiriladi. Xizmat muddati o'tgan majburiyatlar uchun javobgar emas /> <br />" +
        "6.2 Agar mijoz xalqaro pul o'tkazmasini olmagan bo'lsa, biz pulni qaytarib beramiz, qaytarish muddati 10 ish kuni <br /> <br />" +
        "7.Da'volar va nizolar. <br /> <br />" +
        "7.1 Ushbu Shartnoma bo'yicha da'volar Xizmat tomonidan elektron pochta ko'rinishida qabul qilinadi, unda Foydalanuvchi da'voning mohiyatini ko'rsatadi yoki Foydalanuvchilarning texnik yordam chatida. <br /> <br />" +
        "8. Majburiyatlardan voz kechish <br /> <br />" +
        "8.1.Xizmat hech qanday sabablar ko'rsatmasdan shartnoma tuzishni va arizani bajarishni rad etishga haqli. <br /> <br />" +
        "9. Shaxsiy ma'lumotlarni saqlash va qayta ishlash <br /> <br />" +
        "9.1. Xizmat foydalanuvchidan shaxsiy ma'lumotlarni shifrlangan shaklda saqlash, oshkora qilmaslik, uchinchi shaxslarga bermaslik majburiyatini olgan operatsiyalarni amalga oshirish uchun qabul qiladi, 5.9-bandda ko'rsatilgan hollar bundan mustasno. ushbu Shartnomaning 5.9 <br /> <br />" +
        "9.2. Xizmat, agar kerak bo'lsa, har qanday mavjud vositalar yordamida Foydalanuvchi haqida qo'shimcha ma'lumotlarni to'plash bo'yicha faoliyatni mustaqil ravishda amalga oshirishga haqli. Bunday faoliyat natijasida to'plangan barcha ma'lumotlar oshkor etilmaydi, uchinchi shaxslarga berilmaydi, ushbu shartnomaning 5.9-bandida tavsiflangan hollar bundan mustasno <br /> <br />" +
        "9.3. Xizmat birja yoki Elektron hisob-kitob tizimining rasmiy yozma soʻrovi/sud qarori/oʻz tashabbusi bilan foydalanuvchining shaxsiy maʼlumotlarini va Foydalanuvchi tomonidan amalga oshirilgan tranzaktsiyalar rekvizitlarini, agar ularning maxfiy maqomi saqlanishi sharti bilan oʻtkazishga haqli. tergov zaruriyati tug'ilganda) huquqni muhofaza qilish organlariga, shuningdek ular tegishli bo'lgan Foydalanuvchiga <br /> <br />" +
        "9.4. Foydalanuvchi to'g'risidagi barcha to'plangan ma'lumotlar, shuningdek, u tomonidan amalga oshirilgan operatsiyalar rekvizitlari Xizmat tomonidan foydalanuvchining oxirgi buyrug'i bajarilgan paytdan boshlab besh yil davomida Xizmat ma'lumotlar bazasida saqlanadi",
      Support_q1: "Veb-sayt texnik yordamiga murojaat qilish tez va oson!",
      Support_q2: "Diqqat! Biz hech qachon birinchi yozmaymiz!",
      Support_q3: "Onlayn 24/7",
      Support_a1:
        "Bizning veb-sayt jamoasi sizning har qanday savolingizni hal qilishga yordam beradi, Clean Exchange yordami tajribali, malakali va ishonchli jamoadir. Muloqotning mos va qulay usulini tanlang va operatorlarimizga elektron pochta, telegram yoki saytdagi chat oynasida yozing! Tez va aniq javob olasiz, bu juda oson!",
      Support_a2:
        "Ijtimoiy tarmoqlarda ko'plab firibgarlar mavjud bo'lib, ular o'zlarini bizdek ko'rsatib, sizning pulingizni o'zlashtirishga harakat qilishadi. Shuni bilish muhimki, biz hech qachon zararli havolalarni qo'shish yoki yuborish uchun so'rovlar yubormaymiz. O'zingizni himoya qilishning ajoyib usuli bu qidiruv orqali emas, balki faqat saytdagi havola orqali bizga qo'shishdir. Aks holda, biz sizning shaxsiy ma'lumotlaringizni olish maqsadi bo'lgan firibgarlar bilan emas, balki biz bilan bog'lanishingizga kafolat bermaymiz.",
      Support_a3:
        "Bizning xizmatimizda siz 24/7 kun davomida qo'llab-quvvatlanasiz, hozirda bitcoin kursidan qat'iy nazar operatorlarimizga istalgan savol berishingiz mumkin yoki tarjimada texnik xatolik bor, bizning xodimlarimiz sizga doimo javob berishga tayyor! Hamma narsaga qaramay, bizning mutaxassislarimizning samaradorligi eng yuqori darajada. Va ularning soni bizga qo'llab-quvvatlash xizmatining kechayu kunduz ishini tashkil qilish imkonini beradi - tushliksiz, bayramlar va dam olish kunlarisiz.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "support@usdtasia.com manziliga xat yuboring",
      Support_a6: "24/7 - saytda suhbat",
      Affilate_h: "AFFILIATE dasturi",
      Affilate_txt1:
        "Hamkorlik dasturi ro'yxatdan o'tgan foydalanuvchilarga yo'naltiruvchi havola orqali bizning saytimizga kelgan mijozlar almashinuvidan sho''ba royaltilarini olish imkonini beradi. Dasturda ishtirok etish juda oddiy. Siz bizning saytimizda ro'yxatdan o'tishingiz kerak. Va texnik yordamga yozing, sizga almashinuvni amalga oshirish uchun shaxsiy havola beriladi. Hamkorlar ulushi sizning tavsiyalaringiz almashinuvining umumiy miqdoriga bog'liq va jadvalga muvofiq o'zgaradi:",
      Affilate_txt2:
        "Hamkorlik foydasini yechib olish har kuni amalga oshiriladi. Pul olish uchun minimal miqdor - $ 10.",
      Affilate_level: "Daraja",
      Affilate_refs: "Referal almashinuvining umumiy miqdori ",
      Affilate_yours: "Sizning foydangiz",
      Home_checkboxTxt1:
        "Saytdan foydalanish va almashinuv yaratish orqali siz rozilik bildirasiz",
      Home_checkboxTxt2: "UsdtAsia xizmatidan foydalanish shartlari",
      Home_checkboxTxt3: "va",
      Home_checkboxTxt4: "Maxfiylik siyosati.",
      Order_data: "Buyurtma sanasi:",
      Order_rate: "Valyuta kursi:",
      Order_statusLong: "Buyurtmani qayta ishlash holati",
      Order_statusShort: "Holati:",
      Order_pay: "Buyurtmani to'lang",
      Order2_congrat:
        "Tabriklaymiz! Siz almashinuvni deyarli yakunladingiz, uni yakunlash uchun quyidagi amallarni bajaring",
      Order2_toFinish1: "Tranzaktsiyani yakunlash uchun",
      Order2_toFinish2: "miqdori uchun:",
      Order2_toFinish3: "siz quyidagilarni qilishingiz kerak bo'ladi:",
      Order2_inst1:
        "Quyida keltirilgan maʼlumotlardan foydalangan holda toʻlovni amalga oshiring",
      Order2_inst2: "Tarmoqdagi tranzaksiya tasdiqlanishini kuting.",
      Order2_inst3: "Mablag'laringiz o'tkazilishini kuting",
      Order2_attention1: "Diqqat! ",
      Order2_attention2:
        "To'lashdan oldin elektron pochtangizni oching va quyida ko'rsatilgan hamyon raqamini elektron pochta xabarida olingan raqam bilan tekshiring. Hamyon raqamlari mos kelishi kerak. Agar ular mos kelmasa, to'lovni amalga oshirmang va qo'llab-quvvatlash xizmatiga murojaat qiling! Hamyon raqamini tekshirish MAJBURIY.",
      Order2_qr1: "Valyuta:",
      Order2_qr2: "Tafsilotlar:",
      Order2_qr3: "Manzilni nusxalash",
      Order2_t1:
        "* Mamlakatga qarab, mablag'lar ofisda yoki vakil orqali beriladi.",
      Order2_t2:
        "* Ekvivalenti 10 000 AQSh dollaridan yuqori bo'lgan mablag'lar uchun ofisda yoki vakil ishtirokida almashtirish mumkin. Ushbu parametr individualdir va bir qator omillarga bog'liq.",
      Order2_t3:
        "* Esda tuting, kriptovalyuta operatsiyalari qaytarib olinmaydi. Pul yuboradigan manzilni diqqat bilan tekshiring. Agar ular noto'g'ri hamyonga yuborilgan bo'lsa, biz ularni qaytarib bera olmaymiz.",
      Order2_t4:
        "* Bitkoin tarmog'i uchun 3 ta tasdiqdan so'ng bitim tasdiqlangan hisoblanadi.",
      Order2_cancel: "Buyurtmani bekor qilish",
      Order2_paid: "Buyurtma to'lanadi",
      History_1: "DATE",
      History_2: "BERISH",
      History_3: "AMOUNT",
      History_4: "QABUL ETILADI",
      History_5: "STATUS",
      Login_1: "Tizimga kirish",
      Login_2: "Ro‘yxatdan o‘tish",
      Login_3: "Parol",
      Login_4: "Parolingiz esdan chiqdimi?",
      Login_5: "Meni eslaysizmi",
      Login_6: "TIZIMGA KIRISH",
      Registration_1: "Parolni qayta kiriting",
      Registration_2:
        "Men xizmat ko'rsatish shartlarini o'qib chiqdim va roziman",
      Registration_3: "RO‘YXATDAN KETISH",
    },
  },
  pl: {
    translation: {
      Home: "Dom",
      History: "Historia",
      FAQ: "FAQ",
      TermsOfService: "Warunki korzystania z usługi",
      Support: "Wsparcie",
      SignIn: "Zalogować się",
      SignUp: "Zarejestruj się",
      LogOut: "Wyloguj się",
      CardOneMain: "Wsparcie 24/7",
      CardOneTxt:
        "Nasz zespół wsparcia jest do Państwa dyspozycji o każdej porze dnia i nocy.",
      CardTwoMain: "Najlepsze stawki na rynku",
      CardTwoTxt:
        "Współpracujemy z ponad 20 platformami do handlu kryptowalutami, aby zaoferować Ci najkorzystniejsze kursy.",
      CardThreeMain: "Szybkie transakcje",
      CardThreeTxt:
        "Średni czas realizacji transakcji wynosi 5–40 minut, co pozwala na szybkie wykorzystanie szans rynkowych.",
      HomeQuestionsBlock1: "Dlaczego warto zaufać USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA to natychmiastowa i anonimowa usługa wymiany kryptowalut, która jest na rynku od 2018 roku. W tym czasie miliony użytkowników z powodzeniem skorzystało z naszej giełdy kryptowalut, a dziś oferujemy szybką wymianę kryptowalut i usługi zakupu ponad 2,6 milionom zadowolonych klientów każdego miesiąca. Aby usprawnić funkcjonowanie naszej giełdy kryptowalut, nawiązaliśmy współpracę z wiodącymi w branży firmami. Wykwalifikowany personel wsparcia USDTASIA jest dostępny 24/7, aby pomóc Ci w każdej chwili we wszystkich kwestiach związanych z wymianą.",
      HomeQuestionsBlock2: "Jak wymienić kryptowalutę",
      HomeAnswersBlock2:
        "1. 1. Ustaw parę wymiany<br />Wybierz parę, która ma zostać wymieniona<br /><br />" +
        "2. Wprowadź adres swojego portfela<br />Wprowadź adres portfela kryptowalutowego, na który zostanie wysłana Twoja kryptowaluta<br /><br />" +
        "3. Dokonaj płatności<br />Wyślij kryptowalutę, którą chcesz wymienić, na adres widoczny na ekranie<br /><br />" +
        "4. Poczekaj na dotarcie środków<br />Śledź postęp swojej wymiany. Otrzymasz swoją kryptowalutę lub pieniądze fiducjarne tak szybko, jak to możliwe",
      HomeQuestionsBlock3: "Jak szybko otrzymam swoją kryptowalutę?",
      HomeAnswersBlock3:
        "Średnio proces wymiany kryptowaluty trwa od 15 do 60 minut. Jednak czas ten może się wydłużyć, jeśli konkretny blockchain ",
      HomeQuestionsBlock4: "Jakie kryptowaluty obsługujecie?",
      HomeAnswersBlock4:
        "Użytkownicy mogą kupować i wymieniać ponad 500 kryptowalut za pomocą kilku kliknięć po najlepszych kursach transakcyjnych. Ponieważ rynek kryptowalut rozwija się bardzo szybko, stale poszerzamy listę walut cyfrowych dostępnych do szybkiej wymiany, kupna i sprzedaży po najlepszych kursach. Wymieniaj i kupuj BTC, ETH, XRP, LTC i inne monety z szerokiej gamy obsługiwanych kryptowalut, wybierając wygodną metodę płatności (Visa, Mastercard, Apple Pay lub przelew bankowy).",
      HomeQuestionsBlock5:
        "Nie mogłem znaleźć mojej waluty na liście. Co mam zrobić?",
      HomeAnswersBlock5:
        "Posiadamy rozległą sieć agentów wypłacających pieniądze na całym świecie. Jeśli Twoja kwota wymiany przekracza 10000 USDT - znajdziemy dla Ciebie sposób płatności i najlepszy kurs w dowolnej walucie świata.",
      HomeQuestionsBlock6: "Czy oferują Państwo hurtowe kursy wymiany?",
      HomeAnswersBlock6:
        "Mamy specjalne stawki na kwoty wymiany powyżej 10000 USD. Napisz do nas na czacie online. Obsługa USDTASIA, jak i sama usługa wymiany działają całą dobę i chętnie Ci pomożemy",
      AboutOurBrand: "O naszej marce ",
      AffilateProgram: "Program partnerski",
      PrivacyPolicy: "Polityka prywatności",
      Order: "Aplikacja",
      PersonalInformation: "Informacje osobiste",
      Created: "Stworzony",
      Pending: "Aż do",
      Cancelled: "Odwołany",
      Success: "Sukces",
      WhatShouldBeDone: "Co robić dalej:",
      WhatShouldBeDone1:
        "Sprawdź wprowadzone dane, będą Ci potrzebne w razie problemów z wymianą",
      WhatShouldBeDone2:
        "Kliknij przycisk Zapłać wniosek i postępuj zgodnie z dalszymi instrukcjami",
      WhatShouldBeDone3:
        "Po dokonaniu płatności napisz do operatora o płatności",
      WhatShouldBeDone4:
        "Poczekaj na potwierdzenie wpłaty na swoje konto lub portfel",
      Terms_h: "Warunki korzystania z usług i polityka prywatności USDTAsia.",
      Terms_allTxt:
        "<br /> 1. Strony Umowy.<br /><br />" +
        " 1.1 Umowa jest dostępna pomiędzy usługami internetowymi, które są połączone z usługami elektronicznymi, z drugiej strony.<br /><br />" +
        "2. Lista terminów.<br /><br />" +
        "2.1. Serwis to system świadczenia usług internetowych w zakresie wymiany, sprzedaży i zakupu walut cyfrowych i/lub elektronicznych <br /><br />" +
        "2.2. Użytkownikiem jest każda osoba fizyczna korzystająca z usług Serwisu<br /><br />" +
        "2.3. Zgłoszenie stanowi wyrażenie woli Użytkownika skorzystania z jednej z usług oferowanych przez Serwis, poprzez wypełnienie elektronicznego formularza za pośrednictwem strony internetowej Serwisu, na zasadach opisanych w Umowie i określonych w parametrach niniejszego Aplikacji <br /><br />" +
        "2.4. Jednostka Elektroniczna jest jednostką rozliczeniową odpowiedniego podmiotu systemy rozliczeń elektronicznych, oznaczające określoną liczbę roszczeń lub innych praw wynikających z umowy systemów rozliczeń elektronicznych z ich użytkownikami <br /><br />" +
        "3.Przedmiot Umowy.<br /><br / >" +
        "3.1. Przedmiotem niniejszej Umowy jest świadczenie na rzecz Użytkownika Usługi usługi wymiany Jednostek Elektronicznych. <br /><br />" +
        "4. Ogólne Warunki Handlowe<br /><br / >" +
        "4.1. Niniejsza Umowa reguluje stosunki między Użytkownikiem a Serwisem w zakresie usług świadczonych przez Serwis na rzecz Użytkownika i anuluje wszystkie wcześniejsze umowy między Serwisem a Użytkownikiem w tym zakresie<br /><br />" +
        "4.2. Niniejsza umowa wchodzi w życie z chwilą ukończenia przez Użytkownika tworzenia Aplikacji<br /><br />" +
        "4.3 Obie strony, reprezentowane przez Serwis i Użytkownika, akceptują niniejszą umowę jako umowę równoważną na piśmie.<br /><br />" +
        "4.4. Usługa zastrzega sobie prawo do jednostronnego wprowadzania zmian do niniejszej umowy bez odpowiedniego powiadomienia Użytkownika, ale z obowiązkową publikacją aktualnej wersji umowy na tej stronie.<br /><br />" +
        "4.5. Niniejsza umowa obejmuje klauzule i podklauzule zasad opisanych w artykułach „Zasady depozytów kryptowalutowych' i „Zasady zwrotów'. <br /><br />" +
        "5. Warunki korzystania z usługi <br /><br />" +
        "5.1. Jeśli na rachunek Serwisu wpłynie kwota różniąca się od kwoty określonej we wniosku, Serwis dokona przeliczenia odpowiadającego rzeczywistemu otrzymaniu Jednostek Elektronicznych. Większość instrukcji Serwisu jest realizowana w trybie automatycznym, podczas tworzenia Wniosku o ręczne kierowanie wymianą należy upewnić się, że operator pracuje (w przeciwnym razie płatność zostanie zrealizowana w godzinach pracy operatora). Przetwarzanie kryptowaluty odbywa się po osiągnięciu liczby potwierdzeń sieciowych zdefiniowanych przez Giełdę, w zależności od konkretnego przypadku. Wymagana liczba potwierdzeń sieciowych do zaksięgowania Aktywów Kryptowalutowych jest określona w artykule „Zasady Depozytów Kryptowalutowych”.<br /> <br />" +
        "5.2. W przypadku, gdy Użytkownik zażąda Zwrotu, postępuje zgodnie z zasadami opisanymi w artykule „Zasady Zwrotu”.<br /><br />" +
        "5.3. W przypadku odstąpienia od umowy lub otrzymania błędnej płatności, Jednostki Elektroniczne są zwracane w ciągu 72 godzin od daty zawarcia umowy do Zwrotu.<br /><br />" +
        "5.4. Jeżeli Jednostki Elektroniczne nie zostaną otrzymane od Użytkownika na konto Serwisu w określonym czasie, od momentu złożenia wniosku przez Użytkownika, umowa między stronami zostaje rozwiązana przez Serwis z jednej strony, gdyż umowa nie wchodzi w życie. Jeżeli Jednostki Elektroniczne zostaną przelane na konto Serwisu po określonym czasie, środki te podlegają Zwrotowi zgodnie z „Zasadami Zwrotu” po złożeniu wniosku przez Użytkownika lub Serwis przywróci Wniosek Użytkownika za zgodą Użytkownika.<br /><br />" +
        "5.5. Jeżeli nastąpi opóźnienie w przekazaniu środków na dane wskazane przez Użytkownika z powodu winy systemu rozliczeniowego, Serwis nie ponosi odpowiedzialności za szkody wynikające z długiego otrzymania środków. W takim przypadku Użytkownik powinien wyrazić zgodę, że wszelkie roszczenia zostaną zgłoszone do systemu rozliczeniowego, a Serwis udzieli pomocy w miarę swoich możliwości w granicach prawa. <br /> <br />" +
        "5.6. W przypadku korzystania z usług Serwisu, Użytkownik w pełni zgadza się, że Serwis ponosi ograniczoną odpowiedzialność w ramach niniejszych zasad za otrzymane jednostki tytułowe i nie udziela Użytkownikowi dodatkowych gwarancji, a także nie ponosi dodatkowej odpowiedzialności wobec Użytkownika. W związku z tym Użytkownik nie ponosi dodatkowej odpowiedzialności wobec Serwisu. <br /> <br />" +
        "5.7. Serwis nie ponosi odpowiedzialności za szkody i konsekwencje w przypadku błędnego przekazania Jednostek Elektronicznych, jeśli Użytkownik podał nieprawidłowe dane podczas tworzenia Aplikacji. <br /> <br />" +
        "5.8. Reklamacje dotyczące płatności przyjmowane są nie później niż 2 godziny po dokonaniu płatności. Koszt usługi wyszukiwania i zwrotu błędnych płatności wynosi 500 usdt. <br /> <br />" +
        "5.8.1. Jeżeli Klient określi kartę bankową wydaną przez instytucję finansową, która nie odpowiada bankowi wybranemu w kierunku transakcji wymiany lub popełni błąd w podanych danych beneficjenta, zgodnie z warunkami świadczenia usług, Klient zobowiązany jest do uiszczenia opłaty w wysokości 100 USD za rozpatrzenie roszczenia wynikającego z tej rozbieżności <br /> <br />" +
        "5.9. Surowo zabrania się korzystania z Usługi w celu dokonywania nielegalnych przelewów i działań oszukańczych. Zawierając niniejszą umowę, Użytkownik zobowiązuje się do spełnienia tych wymagań, a w przypadku oszustwa ponosić odpowiedzialność karną przewidzianą przez prawo. <br /> <br />" +
        "6.10. Na pierwsze żądanie Usługa ma prawo przekazać informacje o przekazaniu Jednostek Elektronicznych organom ścigania, administracji systemów płatniczych, a także ofiarom działań niezgodnych z prawem, które ucierpiały w wyniku oszustwa udowodnionego przez organy sądowe <br /> <br />" +
        "5.11. Użytkownik zobowiązuje się przedstawić wszelkie dokumenty potwierdzające jego tożsamość w przypadku podejrzenia oszustwa i prania pieniędzy <br /> <br />" +
        "5.12. Użytkownik zobowiązuje się nie ingerować w działanie Serwisu i nie uszkadzać jego oprogramowania i sprzętu, a także zobowiązuje się do podania dokładnych informacji w celu zapewnienia, że ​​Wykonawca wypełnia wszystkie warunki umowy. <br /> <br />" +
        "5.13. Użytkownik zobowiązany jest do przestrzegania norm odpowiadających przepisom prawa, a także do nieingerowania w przepływy komunikacyjne i nietworzenia przeszkód dla normalnego działania kodu programowego Serwisu <br /> <br />" +
        "5.14. Użytkownikowi zabrania się dokonywania wymian na rzecz osób trzecich <br /> <br /> " +
        "5.15. W przypadku podejrzanych transakcji Użytkownik może zostać poproszony o weryfikację. <br /> <br />" +
        "5.16.W przypadku korzystania z kart bankowych z opłatą od odbiorcy (za wykorzystanie limitu kredytowego, kart do płatności socjalnych itp.) opłatę ponosi odbiorca, usługa wymiany nie ponosi żadnej odpowiedzialności za takie opłaty <br /> <br />" +
        "5.17. Wszystkie płatności dokonywane w walutach fiducjarnych są dokonywane bez użycia ułamków dziesiętnych <br /> <br />" +
        "6. Nieprzewidziane okoliczności. <br /> <br />" +
        "6.1 Jeżeli w trakcie przetwarzania Wniosku Użytkownika wystąpią nieprzewidziane okoliczności, które przyczynią się do niespełnienia przez Serwis warunków Umowy, terminy realizacji Wniosku ulegają przesunięciu o okres odpowiadający czasowi trwania siły wyższej. Serwis nie ponosi odpowiedzialności za przeterminowane zobowiązania. Wszelkie czynniki pozostające poza kontrolą Serwisu mogą być uznane za nieprzewidziane okoliczności <br /> <br />" +
        "6.2 W przypadku, gdy klient nie otrzymał przelewu międzynarodowego, dokonamy zwrotu, okres zwrotu wynosi 10 dni roboczych <br /> <br />" +
        "7. Reklamacje i spory. <br /> <br />" +
        "7.1 Reklamacje na podstawie niniejszej Umowy są przyjmowane przez Serwis w formie wiadomości e-mail, w której Użytkownik określa istotę reklamacji lub na czacie pomocy technicznej Użytkowników. <br /> <br />" +
        "8. Zrzeczenie się zobowiązań <br /> <br />" +
        "8.1. Serwis ma prawo odmówić zawarcia umowy i realizacji Aplikacji bez podania przyczyn. <br /> <br />" +
        "9. Przechowywanie i przetwarzanie danych osobowych <br /> <br />" +
        "9.1. Serwis przyjmuje dane osobowe od Użytkownika w celu przeprowadzenia operacji, które Serwis zobowiązuje się przechowywać w formie zaszyfrowanej, nie upubliczniać, nie przekazywać osobom trzecim, z wyjątkiem przypadków opisanych w punkcie 5.9 niniejszej Umowy. 5.9 niniejszej umowy <br /> <br />" +
        "9.2. Serwis ma prawo, w razie potrzeby, samodzielnie przeprowadzić działania mające na celu zebranie dodatkowych danych o Użytkowniku za pomocą wszelkich dostępnych środków. Wszelkie informacje zebrane w wyniku takich działań nie są upubliczniane, nie są przekazywane osobom trzecim, z wyjątkiem przypadków opisanych w paragrafie 5.9. niniejszej umowy <br /> <br />" +
        "9.3. Serwis ma prawo przekazać dane osobowe Użytkownika oraz szczegóły transakcji dokonanych przez Użytkownika, pod warunkiem zachowania ich poufności na oficjalne pisemne żądanie Giełdy lub Systemu Rozliczeń Elektronicznych/decyzję sądu/własną inicjatywę (w przypadku konieczności przeprowadzenia dochodzenia) organom ścigania, a także Użytkownikowi, do którego należą <br /> <br />" +
        "9.4. Wszelkie zebrane dane o Użytkowniku, a także szczegóły transakcji dokonanych przez niego, będą przechowywane w bazie danych Serwisu przez okres pięciu lat od momentu wykonania przez Serwis ostatniego Zamówienia Użytkownika",
      Support_q1:
        "Skontaktowanie się z pomocą techniczną strony internetowej jest szybkie i łatwe!",
      Support_q2: "Uwaga! Nigdy nie piszemy pierwsi!",
      Support_q3: "Online 24/7",
      Support_a1:
        "Nasz zespół strony internetowej pomoże Ci rozwiązać każde Twoje pytanie, Clean Exchange support to doświadczony, wykwalifikowany i niezawodny zespół. Wybierz odpowiedni i wygodny sposób komunikacji i napisz do naszych operatorów e-mailem, telegramem lub w oknie czatu na stronie! Szybko i jasno otrzymasz odpowiedź, to takie proste!",
      Support_a2:
        "W sieciach społecznościowych jest wielu oszustów, którzy będą próbowali przywłaszczyć Twoje pieniądze, podszywając się pod nas. Ważne jest, aby wiedzieć, że nigdy nie wysyłamy próśb o dodanie lub wysyłanie złośliwych linków. Świetnym sposobem na ochronę byłoby dodawanie do nas tylko za pośrednictwem linku ze strony, a nie za pośrednictwem wyszukiwania. W przeciwnym razie nie gwarantujemy, że będziesz komunikować się z nami, a nie ze oszustami, których celem jest uzyskanie Twoich danych osobowych.",
      Support_a3:
        "W naszym serwisie otrzymujesz wsparcie 24/7, możesz zadać dowolne pytanie naszym operatorom, niezależnie od aktualnego kursu bitcoina lub masz błąd techniczny w tłumaczeniu, nasz personel jest zawsze gotowy, aby Ci odpowiedzieć! Mimo wszystko wydajność naszych specjalistów jest na najwyższym poziomie. A ich liczba pozwala nam zorganizować całodobową pracę serwisu wsparcia - bez przerw obiadowych, świąt i weekendów.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia.com",
      Support_a6: "24/7 - czat na stronie",
      Affilate_h: "Program partnerski ",
      Affilate_txt1:
        "Program partnerski pozwala zarejestrowanym użytkownikom zarabiać na tantiemach partnerskich z wymian klientów, którzy trafili na naszą stronę za pośrednictwem linku polecającego. Udział w programie jest dość prosty. Musisz zarejestrować się na naszej stronie. I napisać do pomocy technicznej, otrzymasz swój osobisty link, aby dokonać wymiany. Procent partnera zależy od całkowitej kwoty wymian Twoich poleconych i będzie się różnić zgodnie z tabelą:",
      Affilate_txt2:
        "Wypłata zysku partnerskiego odbywa się codziennie. Minimalna kwota wypłaty wynosi 10 USD.",
      Affilate_level: "Poziom",
      Affilate_refs: "Całkowita kwota wymian poleceń ",
      Affilate_yours: "Twój zysk",
      Home_checkboxTxt1:
        "Korzystając ze strony i tworząc wymianę, wyrażasz zgodę na",
      Home_checkboxTxt2: "Warunki korzystania z usługi UsdtAsia",
      Home_checkboxTxt3: "I",
      Home_checkboxTxt4: "Polityka prywatności.",
      Order_data: "Data zamówienia:",
      Order_rate: "Kurs wymiany:",
      Order_statusLong: "Status przetwarzania zamówienia",
      Order_statusShort: "Status:",
      Order_pay: "ZAPŁAĆ ZA ZAMÓWIENIE",
      Order2_congrat:
        "Gratulacje! Prawie ukończyłeś wymianę, aby ją ukończyć, wykonaj następujące kroki",
      Order2_toFinish1: "Aby zakończyć transakcję",
      Order2_toFinish2: "na kwotę:",
      Order2_toFinish3: "będziesz musiał wykonać następujące czynności:",
      Order2_inst1: "Dokonaj płatności korzystając z danych podanych poniżej",
      Order2_inst2: "Poczekaj na potwierdzenie transakcji w sieci.",
      Order2_inst3: "Poczekaj na przelanie środków",
      Order2_attention1: "Uwaga! ",
      Order2_attention2:
        "Przed dokonaniem płatności otwórz swój e-mail i sprawdź numer portfela podany poniżej z numerem otrzymanym w wiadomości e-mail. Numery portfela muszą się zgadzać. Jeśli nie są zgodne, nie dokonuj płatności i skontaktuj się z pomocą techniczną! Weryfikacja numeru portfela jest OBOWIĄZKOWA.",
      Order2_qr1: "Waluta:",
      Order2_qr2: "Bliższe dane:",
      Order2_qr3: "Kopiuj adres",
      Order2_t1:
        "* W zależności od kraju, środki są wypłacane w biurze lub za pośrednictwem przedstawiciela.",
      Order2_t2:
        "* W przypadku kwot powyżej 10 000 USD w ekwiwalencie, wymiana jest możliwa w biurze lub z udziałem przedstawiciela. Ta opcja jest indywidualna i zależy od szeregu czynników.",
      Order2_t3:
        "* PAMIĘTAJ, że transakcje kryptowalutowe nie są odwołalne. Dokładnie sprawdź adres, na który wysyłasz środki. Nie będziemy mogli zwrócić środków, jeśli zostaną wysłane do niewłaściwego portfela.",
      Order2_t4:
        "* Transakcję uznaje się za potwierdzoną po 3-krotnym potwierdzeniu w sieci Bitcoin.",
      Order2_cancel: "ANULUJ ZAMÓWIENIE",
      Order2_paid: "ZAMÓWIENIE OPŁACONE",
      History_1: "DATA",
      History_2: "DAJĄCY",
      History_3: "KWOTA",
      History_4: "OTRZYMUJĄCY",
      History_5: "STATUS",
      Login_1: "Login",
      Login_2: "Rejestracja",
      Login_3: "Hasło",
      Login_4: "Zapomniałeś hasła?",
      Login_5: "Zapamiętaj mnie",
      Login_6: "LOGIN",
      Registration_1: "Powtórz hasło",
      Registration_2: "Przeczytałem i akceptuję warunki korzystania z usługi",
      Registration_3: "REJESTR",
    },
  },
  ka: {
    translation: {
      Home: "მთავარი",
      History: "ისტორია",
      FAQ: "FAQ",
      TermsOfService: "მომსახურების პირობები",
      Support: "მხარდაჭერა",
      SignIn: "შესვლა",
      SignUp: "იმღერე",
      LogOut: "გასვლა",
      CardOneMain: "24/7 მხარდაჭერა",
      CardOneTxt:
        "ჩვენი მხარდაჭერის ჯგუფი მზად არის დაგეხმაროთ დღის ან ღამის ნებისმიერ დროს.",
      CardTwoMain: "საუკეთესო ტარიფები ბაზარზე",
      CardTwoTxt:
        "ჩვენ ვთანამშრომლობთ 20-ზე მეტ კრიპტო სავაჭრო პლატფორმასთან, რათა შემოგთავაზოთ ყველაზე ხელსაყრელი ტარიფები.",
      CardThreeMain: "სწრაფი ტრანზაქციები",
      CardThreeTxt:
        "ტრანზაქციის საშუალო სიჩქარე 5-40 წუთია, რაც საშუალებას გაძლევთ სწრაფად გამოიყენოთ ბაზრის შესაძლებლობები.",
      HomeQuestionsBlock1: "რატომ ენდობით USDTASIA-ს?",
      HomeAnswersBlock1:
        "USDTASIA არის მყისიერი და ანონიმური კრიპტოვალუტის გაცვლის სერვისი, რომელიც ბაზარზეა 2018 წლიდან. ამ დროის განმავლობაში მილიონობით მომხმარებელმა წარმატებით გამოიყენა ჩვენი კრიპტობირჟა და დღეს ჩვენ ვთავაზობთ კრიპტოვალუტის სწრაფ გაცვლას და შეძენის სერვისებს ყოველ 2.6 მილიონზე მეტ კმაყოფილ მომხმარებელს. თვე. ჩვენი კრიპტო ბირჟის ფუნქციონირების გასაუმჯობესებლად, ჩვენ ვთანამშრომლობთ ინდუსტრიის წამყვან კომპანიებთან. USDTASIA-ს კვალიფიციური დამხმარე პერსონალი ხელმისაწვდომია 24/7, რათა დაგეხმაროთ ნებისმიერ დროს გაცვლასთან დაკავშირებულ ყველა კითხვაში.",
      HomeQuestionsBlock2: "როგორ გავცვალოთ კრიპტოვალუტა",
      HomeAnswersBlock2:
        "1. 1. დააყენეთ გაცვლის წყვილი<br />აირჩიეთ გასაცვლელი წყვილი<br /><br />" +
        "2. შეიყვანეთ თქვენი საფულის მისამართი<br />შეიყვანეთ კრიპტოვალუტის საფულის მისამართი, რომელზეც გაიგზავნება თქვენი კრიპტოვალუტა<br /><br />" +
        "3. გადაიხადეთ<br />გააგზავნეთ კრიპტოვალუტა, რომლის გადაცვლაც გსურთ, იმ მისამართზე, რომელსაც ეკრანზე ხედავთ<br /><br />" +
        "4.დაელოდეთ თანხების მოსვლას<br /> თვალყური ადევნეთ თქვენი გაცვლის პროგრესს. თქვენ მიიღებთ თქვენს კრიპტოვალუტას ან ფიატის ფულს რაც შეიძლება მალე",
      HomeQuestionsBlock3: "რამდენ ხანში მივიღებ ჩემს კრიპტოვალუტას?",
      HomeAnswersBlock3:
        "საშუალოდ, კრიპტოვალუტის გაცვლის პროცესი 15-დან 60 წუთამდე გრძელდება. თუმცა, ეს დრო შეიძლება გაიზარდოს კონკრეტული ბლოკჩეინის შემთხვევაში ",
      HomeQuestionsBlock4: "რა კრიპტოვალუტებს უჭერთ მხარს?",
      HomeAnswersBlock4:
        "მომხმარებლებს შეუძლიათ შეიძინონ და გაცვალონ 500-ზე მეტი კრიპტოვალუტა რამდენიმე დაწკაპუნებით საუკეთესო ტრანზაქციის ტარიფებით. იმის გამო, რომ კრიპტოვალუტის ბაზარი ძალიან სწრაფად ვითარდება, ჩვენ მუდმივად ვაფართოებთ ციფრული ვალუტების სიას, რომლებიც ხელმისაწვდომია სწრაფი გაცვლისთვის, ყიდვა-გაყიდვისთვის საუკეთესო ტარიფებით. გაცვალეთ და შეიძინეთ BTC, ETH, XRP, LTC და სხვა მონეტები მხარდაჭერილი კრიპტოვალუტების ფართო სპექტრიდან გადახდის მოსახერხებელი მეთოდის არჩევით (Visa, Mastercard, Apple Pay ან საბანკო გადარიცხვა).",
      HomeQuestionsBlock5: "სიაში ჩემი ვალუტა ვერ ვიპოვე. რა ვქნა?",
      HomeAnswersBlock5:
        "ჩვენ გვაქვს გადახდის აგენტების ფართო ქსელი მთელ მსოფლიოში, თუ თქვენი გაცვლის თანხა 10000 აშშ დოლარზე მეტია - ჩვენ ვიპოვით თქვენთვის გადახდის საშუალებას და საუკეთესო კურსს მსოფლიოს ნებისმიერ ვალუტაში.",
      HomeQuestionsBlock6: "გაქვთ საბითუმო კურსები?",
      HomeAnswersBlock6:
        "ჩვენ გვაქვს სპეციალური ტარიფები 10000 დოლარზე მეტი ოდენობის გაცვლისთვის. მოგვწერეთ ონლაინ ჩატში. USDTASIA მხარდაჭერის სერვისი, ისევე როგორც თავად გაცვლის სერვისი მუშაობს მთელი საათის განმავლობაში და სიამოვნებით დაგეხმარებით",
      AboutOurBrand: "ჩვენი ბრენდის შესახებ ",
      AffilateProgram: "შვილობილი პროგრამა",
      PrivacyPolicy: "კონფიდენციალურობის პოლიტიკა",
      Order: "განაცხადი",
      PersonalInformation: "პირადი ინფორმაცია",
      Created: "შექმნილია",
      Pending: "მომლოდინე",
      Cancelled: "გაუქმდა",
      Success: "წარმატებები",
      WhatShouldBeDone: "რა უნდა გავაკეთოთ შემდეგ:",
      WhatShouldBeDone1:
        "გადაამოწმეთ შეყვანილი მონაცემები, ის დაგჭირდებათ, თუ გაცვლასთან დაკავშირებული პრობლემები გაქვთ",
      WhatShouldBeDone2:
        "დააჭირეთ ღილაკს გადახდის აპლიკაცია და მიჰყევით შემდგომ ინსტრუქციას",
      WhatShouldBeDone3: "გადახდის შემდეგ მიწერეთ ოპერატორს გადახდის შესახებ",
      WhatShouldBeDone4: "დაელოდეთ ქვითარს თქვენს ანგარიშზე ან საფულეზე",
      Terms_h:
        "USDTAsia-ს მომსახურების პირობები და კონფიდენციალურობის პოლიტიკა.",
      Terms_allTxt:
        "<br /> 1. ხელშეკრულების მხარეები.<br /><br />" +
        "1.1 შეთანხმება გაფორმებულია ინტერნეტ სერვისს შორის ელექტრონული აქტივების გაცვლის usdtasia-ს შორის, შემდგომში მოხსენიებული, როგორც სერვისი, ერთი მხრივ, და მომხმარებელი, პირადად, ვინც ისარგებლა სერვისის მომსახურებით, მეორე მხრივ. ხელი.<br /><br />" +
        "2. ტერმინების სია.<br /><br />" +
        "2.1. სერვისი არის ციფრული და/ან ელექტრონული ვალუტების გაცვლის, გაყიდვისა და შესყიდვის ინტერნეტ სერვისების მიწოდების სისტემა <br /><br />" +
        "2.2. მომხმარებელი არის ნებისმიერი ფიზიკური პირი, რომელიც სარგებლობს სერვისის მომსახურებით<br /><br />" +
        "2.3 განაცხადი არის მომხმარებლის განზრახვის გამოხატვა, გამოიყენოს სერვისის მიერ შემოთავაზებული ერთ-ერთი სერვისი, სერვისის ვებსაიტის მეშვეობით ელექტრონული ფორმის შევსებით, ხელშეკრულებაში აღწერილი და ამ აპლიკაციის პარამეტრებში მითითებული პირობებით. <br /><br />" +
        "2.4. ელექტრონული ერთეული არის შესაბამისი ელექტრონული ანგარიშსწორების სისტემების აღრიცხვის ერთეული, რომელიც აღნიშნავს გარკვეული რაოდენობის მოთხოვნას ან სხვა უფლებებს, რომლებიც წარმოიქმნება ელექტრონული ანგარიშსწორების სისტემების მომხმარებლებთან შეთანხმებიდან <br /><br />" +
        "3.ხელშეკრულების საგანი.<br /><br />" +
        "3.1. წინამდებარე შეთანხმების საგანია სერვისის მომხმარებლის მიწოდება ელექტრონული ერთეულების გაცვლის სერვისით. <br /><br />" +
        "4. ზოგადი წესები და პირობები<br /><br />" +
        "4.1. ეს შეთანხმება არეგულირებს მომხმარებელსა და სერვისს შორის ურთიერთობას სერვისის მიერ მომხმარებლისთვის მიწოდებულ სერვისებთან დაკავშირებით და აუქმებს ყველა წინა ხელშეკრულებას სერვისსა და მომხმარებელს შორის ამ თემაზე<br /><br />" +
        "4.2. ეს შეთანხმება ძალაში შედის იმ მომენტიდან, როდესაც მომხმარებელი დაასრულებს აპლიკაციის ფორმირებას<br /><br />" +
        "4.3 ორივე მხარე, წარმოდგენილი სერვისისა და მომხმარებლის მიერ, წერილობით ეთანხმება ამ შეთანხმებას, როგორც ექვივალენტურ კონტრაქტს.<br /><br />" +
        "4.4. სერვისი იტოვებს უფლებას ცალმხრივად შეიტანოს ცვლილებები ამ ხელშეკრულებაში მომხმარებლის შესაბამისი შეტყობინების გარეშე, მაგრამ ამ გვერდზე ხელშეკრულების მიმდინარე ვერსიის სავალდებულო გამოქვეყნებით.<br /><br />" +
        "4.5. ეს შეთანხმება მოიცავს სტატიებში 'კრიპტოვალუტის ანაბრის წესები' და 'ანაზღაურების წესები' აღწერილი წესების პუნქტებსა და ქვეპუნქტებს. <br /><br />" +
        "5. მომსახურების პირობები <br /><br />" +
        "5.1. თუ სერვისის ანგარიშზე მიღებულია თანხა, რომელიც განსხვავდება განაცხადში მითითებული თანხისგან, სერვისი აკეთებს ხელახალი გამოთვლას, რომელიც შეესაბამება ელექტრონული ერთეულების ფაქტობრივ მიღებას. სერვისის მიმართულებების უმეტესობა ხორციელდება ავტომატურ რეჟიმში, როდესაც ბირჟის ხელით მიმართულების განაცხადის შექმნით, აუცილებელია დარწმუნდეთ, რომ ოპერატორი მუშაობს (წინააღმდეგ შემთხვევაში, გადახდა განხორციელდება ოპერატორის სამუშაო საათებში). კრიპტოვალუტის დამუშავება ხდება ბირჟის მიერ განსაზღვრული ქსელის დადასტურებების რაოდენობის მიღწევის შემდეგ, კონკრეტული შემთხვევიდან გამომდინარე. />" +
        "5.2. იმ შემთხვევაში, თუ მომხმარებელი ითხოვს თანხის დაბრუნებას, ის მიჰყვება სტატიაში 'ანაზღაურების წესები'.<br /><br />" +
        "5.3. ხელშეკრულების გაუქმების ან არასწორი გადახდის მიღების შემთხვევაში, ელექტრონული ერთეულები ბრუნდება შეთანხმების დღიდან დაბრუნებამდე 72 საათის განმავლობაში.<br /><br />" +
        "5.4. თუ ელექტრონული ერთეულები არ მიიღება მომხმარებლისგან სერვისის ანგარიშზე მითითებულ ვადაში, მომხმარებლის განაცხადის მომენტიდან, მხარეებს შორის ხელშეკრულება წყდება სერვისის მიერ ერთი მხრივ, როგორც ხელშეკრულება. არ შედის ძალაში, თუ ელექტრონული ერთეულები გადაირიცხება სერვისის ანგარიშზე მითითებული პერიოდის შემდეგ, ასეთი თანხები ექვემდებარება დაბრუნებას „ანაზღაურების წესების“ შესაბამისად. მომხმარებლის აპლიკაცია ან სერვისი აღადგენს მომხმარებლის აპლიკაციას მომხმარებლის თანხმობით.<br /><br />" +
        "5.5. თუ მომხმარებლის მიერ მითითებულ დეტალებზე თანხის გადარიცხვა დაგვიანებულია ანგარიშსწორების სისტემის ბრალის გამო, სერვისი არ არის პასუხისმგებელი თანხის ხანგრძლივი მიღების შედეგად მიყენებული ზიანისთვის. ამ შემთხვევაში მომხმარებელი უნდა დაეთანხმოს, რომ ყველა პრეტენზია წარედგინება ანგარიშსწორების სისტემას და სამსახური უწევს დახმარებას თავისი შესაძლებლობების ფარგლებში, კანონის ფარგლებში" +
        "5.6. სერვისით სარგებლობის შემთხვევაში მომხმარებელი სრულად ეთანხმება, რომ სერვისი ეკისრება შეზღუდული პასუხისმგებლობას მიღებული სათაურის ერთეულების ამ წესების ფარგლებში და არ აძლევს მომხმარებელს დამატებით გარანტიებს, ასევე არ ეკისრება დამატებითი პასუხისმგებლობა მომხმარებლის წინაშე, შესაბამისად, მომხმარებელი არ ეკისრება დამატებით პასუხისმგებლობას <br /> " +
        "5.7. სერვისი არ არის პასუხისმგებელი ზარალზე და შედეგებზე ელექტრონული ერთეულების არასწორად გადაცემის შემთხვევაში, თუ მომხმარებელმა მიუთითა არასწორი დეტალები აპლიკაციის შექმნისას. <br /> <br />" +
        "5.8. პრეტენზიები გადახდებზე მიიღება გადახდის განხორციელებიდან არაუგვიანეს 2 საათისა. ძებნის სერვისის ღირებულება და არასწორი გადახდების ანაზღაურება არის 500 აშშ დოლარი. <br /> <br />" +
        "5.8.1. თუ კლიენტი მიუთითებს საფინანსო ინსტიტუტის მიერ გაცემულ საბანკო ბარათს, რომელიც არ ემთხვევა გაცვლითი ტრანზაქციის მიმართულებით შერჩეულ ბანკს, ან უშვებს შეცდომას ბენეფიციარის მითითებულ დეტალებში, პირობების შესაბამისად. მომსახურების მიწოდებისას, კლიენტი ვალდებულია გადაიხადოს საკომისიო 100 აშშ დოლარი ამ შეუსაბამობის შედეგად წარმოქმნილი საჩივრის დამუშავებისთვის <br /> <br />" +
        "5.9. კატეგორიულად აკრძალულია სერვისის გამოყენება უკანონო გადარიცხვებისთვის და თაღლითური ქმედებებისთვის. ამ ხელშეკრულების დადებისას მომხმარებელი იღებს ვალდებულებას შეასრულოს ეს მოთხოვნები და თაღლითობის შემთხვევაში დაეკისროს კანონით დადგენილ სისხლის სამართლის პასუხისმგებლობას. <br /> <br> />" +
        "6.10 სამსახურს უფლება აქვს პირველივე მოთხოვნით გადასცეს ინფორმაცია ელექტრონული ერთეულების გადაცემის შესახებ სამართალდამცავ ორგანოებს, გადახდის სისტემების ადმინისტრირებას, აგრეთვე სასამართლო ხელისუფლების მიერ დადასტურებული თაღლითობის შედეგად დაზარალებული უკანონო ქმედებების მსხვერპლს. <br /> <br />" +
        "5.11. მომხმარებელი იღებს ვალდებულებას წარმოადგინოს მისი ვინაობის დამადასტურებელი ყველა დოკუმენტი თაღლითობისა და ფულის გათეთრების შესახებ ეჭვის შემთხვევაში <br /> <br />" +
        "5.12. მომხმარებელი იღებს ვალდებულებას არ ჩაერიოს სერვისის მუშაობაში და არ დააზიანოს მისი პროგრამული უზრუნველყოფა და აპარატურა, ხოლო მომხმარებელი იღებს ვალდებულებას მიაწოდოს ზუსტი ინფორმაცია, რათა უზრუნველყოს კონტრაქტორის მიერ ხელშეკრულების ყველა პირობის შესრულება. <br / > <br />" +
        "5.13. მომხმარებელი ვალდებულია დაიცვას კანონმდებლობის შესაბამისი ნორმები, ასევე არ შეუშალოს საკომუნიკაციო ნაკადები და არ შეუქმნას დაბრკოლებები სამსახურის პროგრამული კოდის ნორმალურ ფუნქციონირებას <br /> <br / >" +
        "5.14. მომხმარებელს ეკრძალება გაცვლა მესამე მხარის სასარგებლოდ <br /> <br /> " +
        "5.15. საეჭვო ტრანზაქციების შემთხვევაში, მომხმარებელს შეიძლება მოეთხოვოს გადამოწმება. <br /> <br />" +
        "5.16. საბანკო ბარათების მიმღების საკომისიოს გამოყენების შემთხვევაში (საკრედიტო ლიმიტის, სოციალური გადახდების ბარათების გამოყენებისას და ა.შ.) საკომისიო იხდის მიმღებს, გაცვლის სერვისი არ ეკისრება პასუხისმგებლობას ასეთზე. საფასური <br /> <br />" +
        "5.17. ფიატის ვალუტაში განხორციელებული ყველა გადახდა ხდება ათობითი წილადების გამოყენების გარეშე <br /> <br />" +
        "6. გაუთვალისწინებელი შემთხვევები. <br /> <br />" +
        "6.1 თუ მომხმარებლის განაცხადის დამუშავების პროცესში წარმოიქმნება გაუთვალისწინებელი გარემოებები, რომლებიც ხელს უწყობს სერვისის მიერ ხელშეკრულების პირობების შეუსრულებლობას, აპლიკაციის შესრულების ვადები გადაიდება ფორსმაჟორის ხანგრძლივობის შესაბამისი პერიოდისთვის. სერვისი არ არის პასუხისმგებელი ვადაგადაცილებულ ვალდებულებებზე." +
        "6.2 იმ შემთხვევაში, თუ კლიენტს არ მიუღია საერთაშორისო გადარიცხვა, ჩვენ დაგიბრუნებთ თანხას, თანხის დაბრუნების ვადა არის 10 სამუშაო დღე <br /> <br />" +
        "7.Claims and Disputes. <br /> <br />" +
        "7.1 წინამდებარე ხელშეკრულებით გათვალისწინებული პრეტენზიები მიიღება სერვისის მიერ ელფოსტის სახით, რომელშიც მომხმარებელი აზუსტებს პრეტენზიის არსს ან მომხმარებელთა ტექნიკური მხარდაჭერის ჩატში. <br /> <br />" +
        "8. ვალდებულებაზე უარის თქმა <br /> <br />" +
        "8.1.სამსახურს უფლება აქვს უარი თქვას ხელშეკრულების დადებაზე და განაცხადოს რაიმე მიზეზის დასახელების გარეშე. <br /> <br />" +
        "9. პერსონალური მონაცემების შენახვა და დამუშავება <br /> <br />" +
        "9.1 სერვისი იღებს მომხმარებლისგან პერსონალურ მონაცემებს ოპერაციების განხორციელების მიზნით, რომლებსაც სერვისი იღებს ვალდებულებას შეინახოს დაშიფრული ფორმით, არ გაასაჯაროოს, არ გადასცეს მესამე პირებს, გარდა 5.9 პუნქტში აღწერილი შემთხვევებისა. ამ ხელშეკრულების 5.9 <br /> <br />" +
        "9.2. სერვისს უფლება აქვს, საჭიროების შემთხვევაში, დამოუკიდებლად განახორციელოს აქტივობები მომხმარებლის შესახებ დამატებითი მონაცემების შეგროვების მიზნით ნებისმიერი ხელმისაწვდომი საშუალებით. ასეთი აქტივობების შედეგად შეგროვებული ყველა ინფორმაცია არ საჯაროვდება, არ გადაეცემა მესამე პირებს, გარდა ამ შეთანხმების 5.9 პუნქტში აღწერილის <br /> <br />" +
        "9.3. სერვისს უფლება აქვს გადასცეს მომხმარებლის პერსონალური მონაცემები და მომხმარებლის მიერ განხორციელებული ტრანზაქციების დეტალები, იმ პირობით, რომ მათი კონფიდენციალური სტატუსი დაცულია ბირჟის ან ელექტრონული ანგარიშსწორების სისტემის ოფიციალური წერილობითი მოთხოვნით / სასამართლოს გადაწყვეტილებით / საკუთარი ინიციატივით ( გამოძიების საჭიროების შემთხვევაში) სამართალდამცავ ორგანოებს, ისევე როგორც მომხმარებელს, რომელსაც ისინი ეკუთვნიან <br /> <br />" +
        "9.4. მომხმარებლის შესახებ შეგროვებული ყველა მონაცემი, ისევე როგორც მის მიერ განხორციელებული ტრანზაქციების დეტალები, ინახება სამსახურის მონაცემთა ბაზაში ხუთი წლის განმავლობაში მომხმარებლის ბოლო შეკვეთის სამსახურის მიერ შესრულების მომენტიდან",
      Support_q1:
        "ვებსაიტის ტექნიკურ მხარდაჭერასთან დაკავშირება სწრაფი და მარტივია!",
      Support_q2: "ყურადღება! ჩვენ არასდროს ვწერთ პირველს!",
      Support_q3: "ონლაინ 24/7",
      Support_a1:
        "ჩვენი ვებ-გვერდის გუნდი დაგეხმარებათ გადაჭრას თქვენი ნებისმიერი შეკითხვა, Clean Exchange მხარდაჭერა არის გამოცდილი, კვალიფიციური და სანდო გუნდი. აირჩიეთ კომუნიკაციის შესაფერისი და კომფორტული გზა და მოგვწერეთ ჩვენს ოპერატორებს ელექტრონული ფოსტით, ტელეგრამით ან საიტის ჩატის ფანჯარაში! თქვენ მიიღებთ პასუხს სწრაფად და ნათლად, ეს ასე მარტივია!",
      Support_a2:
        "სოციალურ ქსელებში არის თაღლითების დიდი რაოდენობა, რომლებიც შეეცდებიან თქვენი ფულის გაფლანგვას, თითქოს ჩვენ ვართ. მნიშვნელოვანია იცოდეთ, რომ ჩვენ არასოდეს ვაგზავნით მოთხოვნებს რაიმე მავნე ბმულების დამატების ან გაგზავნის შესახებ. საკუთარი თავის დასაცავად შესანიშნავი გზა იქნება მხოლოდ საიტის ბმულით და არა ძიების საშუალებით დაგვიმატოთ. წინააღმდეგ შემთხვევაში, ჩვენ არ გაძლევთ გარანტიას, რომ თქვენ დაუკავშირდებით ჩვენთან და არა თაღლითებთან, რომელთა მიზანია თქვენი პერსონალური მონაცემების მოპოვება.",
      Support_a3:
        "ჩვენს სერვისში თქვენ იღებთ მხარდაჭერას 24/7, შეგიძლიათ დაუსვათ ნებისმიერი შეკითხვა ჩვენს ოპერატორებს, მიუხედავად ბიტკოინის კურსისა ამ მომენტში ან გაქვთ ტექნიკური შეცდომა თარგმანში, ჩვენი პერსონალი ყოველთვის მზად არის გიპასუხოთ! მიუხედავად ყველაფრისა, ჩვენი სპეციალისტების ეფექტურობა უმაღლეს დონეზეა. მათი რიცხვი კი საშუალებას გვაძლევს მოვაწყოთ დამხმარე სამსახურის მრგვალი საათის მუშაობა - ლანჩების, არდადეგების და შაბათ-კვირის გარეშე.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia.com",
      Support_a6: "24/7 - ჩატი საიტზე",
      Affilate_h: "შვილობილი პროგრამა ",
      Affilate_txt1:
        "შვილობილი პროგრამა საშუალებას აძლევს დარეგისტრირებულ მომხმარებლებს გამოიმუშაონ შვილობილი ჰონორარი იმ მომხმარებლების გაცვლიდან, რომლებიც მოვიდნენ ჩვენს საიტზე რეფერალური ბმულის საშუალებით. პროგრამაში მონაწილეობა საკმაოდ მარტივია. თქვენ უნდა დარეგისტრირდეთ ჩვენს საიტზე. და მიწერეთ ტექნიკურ მხარდაჭერას, მოგეცემათ თქვენი პირადი ბმული გაცვლის განსახორციელებლად. პარტნიორის პროცენტი დამოკიდებულია თქვენი რეფერალების გაცვლის მთლიან რაოდენობაზე და განსხვავდება ცხრილის მიხედვით:",
      Affilate_txt2:
        "შვილობილი მოგების ამოღება ხორციელდება ყოველდღე. გატანის მინიმალური თანხაა $10.",
      Affilate_level: "დონე",
      Affilate_refs: "რეფერალების გაცვლის მთლიანი რაოდენობა ",
      Affilate_yours: "შენი მოგება",
      Home_checkboxTxt1:
        "საიტის გამოყენებით და გაცვლის შექმნით თქვენ ეთანხმებით",
      Home_checkboxTxt2: "UsdtAsia-ს მომსახურების პირობები",
      Home_checkboxTxt3: "და",
      Home_checkboxTxt4: "კონფიდენციალურობის პოლიტიკა.",
      Order_data: "შეკვეთის თარიღი:",
      Order_rate: "გაცვლითი კურსი:",
      Order_statusLong: "შეკვეთის დამუშავების სტატუსი",
      Order_statusShort: "სტატუსი:",
      Order_pay: "გადაიხადეთ შეკვეთა",
      Order2_congrat:
        "გილოცავ! თქვენ თითქმის დაასრულეთ გაცვლა, მის დასასრულებლად მიჰყევით ამ ნაბიჯებს",
      Order2_toFinish1: "გარიგების დასასრულებლად",
      Order2_toFinish2: "ოდენობით:",
      Order2_toFinish3: "თქვენ უნდა გააკეთოთ შემდეგი:",
      Order2_inst1:
        "განახორციელეთ გადახდა ქვემოთ მოცემული დეტალების გამოყენებით",
      Order2_inst2: "დაელოდეთ ტრანზაქციის დადასტურებას ქსელში.",
      Order2_inst3: "დაელოდეთ თქვენი თანხების გადარიცხვას",
      Order2_attention1: "ყურადღება! ",
      Order2_attention2:
        "გადახდამდე გახსენით თქვენი ელფოსტა და შეამოწმეთ ქვემოთ მითითებული საფულის ნომერი ელფოსტის შეტყობინებაში მიღებული ნომრით. საფულის ნომრები უნდა ემთხვეოდეს. თუ ისინი არ ემთხვევა, არ განახორციელოთ გადახდა და დაუკავშირდით მხარდაჭერას! საფულის ნომრის დადასტურება სავალდებულოა.",
      Order2_qr1: "ვალუტა:",
      Order2_qr2: "დეტალები:",
      Order2_qr3: "დააკოპირეთ მისამართი",
      Order2_t1:
        "* ქვეყნიდან გამომდინარე, თანხები გაიცემა ოფისში ან წარმომადგენლის მეშვეობით.",
      Order2_t2:
        "* 10,000 აშშ დოლარზე მეტი თანხის ექვივალენტის შემთხვევაში შესაძლებელია გაცვლა ოფისში ან წარმომადგენლის მონაწილეობით. ეს ვარიანტი ინდივიდუალურია და მრავალ ფაქტორზეა დამოკიდებული.",
      Order2_t3:
        "* დაიმახსოვრე კრიპტოვალუტის ტრანზაქციები არ არის გაუქმება. ყურადღებით შეამოწმეთ მისამართი, რომელზეც აგზავნით თანხებს. ჩვენ ვერ შევძლებთ თანხების დაბრუნებას, თუ ისინი არასწორ საფულეში გაიგზავნება.",
      Order2_t4:
        "* ტრანზაქცია დადასტურებულად ითვლება ბიტკოინის ქსელისთვის 3 დადასტურების შემდეგ.",
      Order2_cancel: "შეკვეთის გაუქმება",
      Order2_paid: "შეკვეთა გადახდილია",
      History_1: "თარიღი",
      History_2: "მიცემა",
      History_3: "თანხა",
      History_4: "მიღება",
      History_5: "სტატუსი",
      Login_1: "შესვლა",
      Login_2: "რეგისტრაცია",
      Login_3: "პაროლი",
      Login_4: "დაგავიწყდათ პაროლი?",
      Login_5: "დაიმახსოვრე",
      Login_6: "შესვლა",
      Registration_1: "გაიმეორეთ პაროლი",
      Registration_2: "მე წავიკითხე და ვეთანხმები მომსახურების პირობებს",
      Registration_3: "რეგისტრაცია",
    },
  },
  ro: {
    translation: {
      Home: "Acasă",
      History: "Istorie",
      FAQ: "FAQ",
      TermsOfService: "Termeni și condiții",
      Support: "Sprijin",
      SignIn: "Conectare",
      SignUp: "Cântați",
      LogOut: "Deconectați-vă",
      CardOneMain: "Asistență 24/7",
      CardOneTxt:
        "Echipa noastră de asistență este disponibilă pentru a vă ajuta la orice oră din zi sau din noapte.",
      CardTwoMain: "Cele mai bune tarife de pe piata",
      CardTwoTxt:
        "Cooperăm cu peste 20 de platforme de tranzacționare cripto pentru a vă oferi cele mai avantajoase rate.",
      CardThreeMain: "Tranzacții rapide",
      CardThreeTxt:
        "Viteza medie a tranzacțiilor este de 5-40 de minute, permițându-vă să valorificați rapid oportunitățile de pe piață.",
      HomeQuestionsBlock1: "De ce să aveți încredere în USDTASIA?",
      HomeAnswersBlock1:
        "USDTASIA este un serviciu de schimb instantaneu și anonim de criptomonede care se află pe piață din 2018. În acest timp, milioane de utilizatori au folosit cu succes schimbul nostru de criptomonede, iar astăzi oferim servicii rapide de schimb și cumpărare de criptomonede pentru mai mult de 2,6 milioane de clienți mulțumiți fiecare. lună. Pentru a îmbunătăți funcționarea schimbului nostru de cripto, am colaborat cu companii lidere din industrie. Personalul de asistență calificat al USDTASIA este disponibil 24/7 pentru a vă ajuta în orice moment cu toate întrebările legate de schimb.",
      HomeQuestionsBlock2: "Cum se schimbă criptomonede",
      HomeAnswersBlock2:
        "1. 1.Setați perechea de schimb<br />Selectați perechea de schimbat<br /><br />" +
        "2. Introduceți adresa portofelului dvs.<br />Introduceți adresa portofelului cu criptomonede la care va fi trimisă criptomoneda dvs.<br /><br />" +
        "3. Efectuați o plată<br />Trimiteți criptomoneda pe care doriți să o schimbați la adresa pe care o vedeți pe ecran<br /><br />" +
        "4. Așteptați să ajungă fondurile<br />Urmăriți progresul schimbului dvs. Veți primi criptomoneda sau banii fiat cât mai curând posibil",
      HomeQuestionsBlock3: "Cât de curând îmi voi primi criptomoneda?",
      HomeAnswersBlock3:
        "În medie, procesul de schimb de criptomonede durează între 15 și 60 de minute. Cu toate acestea, acest timp poate crește dacă un anumit blockchain ",
      HomeQuestionsBlock4: "Ce criptomonede suportați?",
      HomeAnswersBlock4:
        "Utilizatorii pot cumpăra și schimba peste 500 de criptomonede în câteva clicuri la cele mai bune rate de tranzacție. Deoarece piața criptomonedelor se dezvoltă foarte rapid, extindem în mod continuu lista de monede digitale disponibile pentru schimb rapid, cumpărare și vânzare la cele mai bune rate. Schimbați și cumpărați monede BTC, ETH, XRP, LTC și alte monede dintr-o gamă largă de criptomonede acceptate, alegând o metodă de plată convenabilă (Visa, Mastercard, Apple Pay sau transfer bancar).",
      HomeQuestionsBlock5:
        "Nu am putut găsi moneda mea în listă. Ce trebuie să fac?",
      HomeAnswersBlock5:
        "Avem o rețea extinsă de agenți de plată în toată lumea, dacă suma dvs. de schimb este mai mare de 10000 USD - vom găsi pentru dvs. o modalitate de plată și cea mai bună rată în orice valută a lumii",
      HomeQuestionsBlock6: "Aveți cursuri de schimb angro?",
      HomeAnswersBlock6:
        "Avem tarife speciale pentru sume de schimb peste 10000 USD. Scrie-ne pe chat online. Serviciul de asistență USDTASIA, precum și serviciul de schimb în sine funcționează non-stop și vă vor ajuta cu plăcere",
      AboutOurBrand: "Despre brandul nostru ",
      AffilateProgram: "Programul Afiliat",
      PrivacyPolicy: "Politica de confidențialitate",
      Order: "Aplicație",
      PersonalInformation: "Informații personale",
      Created: "Creat",
      Pending: "În așteptare",
      Cancelled: "Anulat",
      Success: "Succes",
      WhatShouldBeDone: "Ce să faci în continuare:",
      WhatShouldBeDone1:
        "Verificați datele introduse, veți avea nevoie de ele în cazul în care aveți probleme cu schimbul",
      WhatShouldBeDone2:
        "Faceți clic pe butonul aplicație de plată și urmați instrucțiunile suplimentare",
      WhatShouldBeDone3: "După plată, scrieți operatorului despre plată",
      WhatShouldBeDone4: "Așteptați chitanța în contul sau în portofel",
      Terms_h:
        "Termenii și condițiile USDTAsia și Politica de confidențialitate.",
      Terms_allTxt:
        "<br /> 1. Părțile la Acord.<br /><br />" +
        " 1.1 Acordul se încheie între serviciul de internet pentru schimbul de active electronice usdtasia, denumit în continuare Serviciul, pe de o parte, și Utilizator, în persoana celui care a utilizat serviciile Serviciului, pe de altă parte. mână.<br /><br />" +
        "2. Listă de termeni.<br /><br />" +
        "2.1. Serviciul este un sistem de furnizare de servicii de internet pentru schimbul, vânzarea și cumpărarea de monede digitale și/sau electronice <br /><br />" +
        "2.2. Utilizator este orice persoană fizică care utilizează serviciile Serviciului<br /><br />" +
        "2.3. Aplicația este o expresie a intenției Utilizatorului de a utiliza unul dintre serviciile oferite de Serviciu, prin completarea unui formular electronic prin intermediul site-ului Serviciului, în termenii și condițiile descrise în Acord și specificate în parametrii acestei Aplicații. <br /><br />" +
        "2.4. Unitatea electronică este o unitate de cont a sistemelor electronice de decontare respective, care denotă un anumit număr de creanțe sau alte drepturi care decurg din acordul sistemelor electronice de decontare cu utilizatorii acestora <br /><br />" +
        "3.Subiectul acordului.<br /><br />" +
        "3.1. Obiectul prezentului acord este de a oferi utilizatorului serviciului serviciul de schimb de unități electronice. <br /><br />" +
        "4. Termeni și condiții generale<br /><br />" +
        "4.1. Prezentul Acord reglementează relațiile dintre Utilizator și Serviciu cu privire la serviciile furnizate de Serviciu către Utilizator și anulează toate acordurile anterioare dintre Serviciu și Utilizator pe acest subiect<br /><br />" +
        "4.2. Acest acord intră în vigoare din momentul în care Utilizatorul finalizează formarea Aplicației<br /><br />" +
        "4.3 Ambele părți, reprezentate de Serviciu și Utilizator, acceptă în scris acest acord ca un contract echivalent.<br /><br />" +
        "4.4. Serviciul își rezervă dreptul de a face unilateral modificări acestui acord fără notificarea corespunzătoare a Utilizatorului, dar cu publicarea obligatorie a versiunii actuale a acordului pe această pagină.<br /><br />" +
        "4.5. Acest acord include clauze și subclauze ale regulilor descrise în articolele „Reguli de depozit pentru criptomonede” și „Reguli de rambursare”. <br /><br />" +
        "5. Termeni și condiții <br /><br />" +
        "5.1. În cazul în care contul de Serviciu primește o sumă care diferă de suma specificată în cerere, Serviciul face o recalculare care corespunde cu primirea efectivă a Unităților Electronice. Majoritatea direcțiilor Serviciului sunt efectuate în mod automat, atunci când creând o Aplicație de direcționare manuală a schimbului, este necesar să vă asigurați că operatorul lucrează (în caz contrar, plata se va face în timpul programului de lucru al operatorului, procesarea criptomonedei are loc după atingerea numărului de rețea). confirmări definite de Bursă, în funcție de cazul specific Numărul necesar de confirmări de rețea pentru creditarea activelor criptomonede este specificat în articolul ”Reguli pentru depozitele în criptomonede”.<br /> <br />" +
        "5.2. În cazul în care Utilizatorul solicită o rambursare, aceasta urmează regulile descrise în articolul ”Reguli de rambursare”.<br /><br />" +
        "5.3. În cazul rezilierii contractului sau primirii unei plăți eronate, Unitățile Electronice se returnează în termen de 72 de ore de la data acordului la Retur.<br /><br />" +
        "5.4. În cazul în care Unitățile Electronice nu sunt primite de la Utilizator pe contul Serviciului în perioada specificată, din momentul solicitării de către Utilizator, acordul dintre părți este reziliat de către Serviciu, pe de o parte, ca și acord. nu intră în vigoare În cazul în care unitățile electronice sunt transferate în contul Serviciului după perioada specificată, astfel de fonduri sunt supuse rambursării conform ”Regulilor de rambursare” după ce cererea utilizatorului sau Serviciul restabilește aplicația utilizatorului. Consimțământul utilizatorului.<br /><br />" +
        "5.5. Dacă există o întârziere în transferul de fonduri la detaliile specificate de Utilizator din vina sistemului de decontare, Serviciul nu este răspunzător pentru daune rezultate din primirea îndelungată a fondurilor. În acest caz, Utilizatorul trebuie să fie de acord că toate revendicările vor fi aduse sistemului de soluționare, iar Serviciul își oferă asistența cât mai bine, în limitele legii <br /> <br />" +
        "5.6. În cazul utilizării serviciilor Serviciului, Utilizatorul este pe deplin de acord că Serviciul poartă o responsabilitate limitată în cadrul acestor reguli a unităților de titlu primite și nu oferă garanții suplimentare Utilizatorului, precum și nu suportă responsabilitate suplimentară pentru Utilizator. În consecință, Utilizatorul nu poartă responsabilitate suplimentară pentru Serviciu" +
        "5.7.Serviciul nu este responsabil pentru daune și consecințe în cazul transferului eronat al unităților electronice dacă Utilizatorul a specificat detalii incorecte la crearea Aplicației. <br /> <br />" +
        "5.8. Cererile de plată sunt acceptate în cel mult 2 ore de la efectuarea plății. Costul serviciului de căutare și rambursare a plăților eronate este de 500 usdt. <br /> <br />" +
        "5.8.1. În cazul în care Clientul specifică un card bancar emis de o instituție financiară care nu se potrivește cu banca selectată în direcția tranzacției de schimb, sau greșește detaliile specificate ale beneficiarului, în conformitate cu termenii prestarea serviciului, Clientul este obligat să plătească o taxă de 100 usdt pentru procesarea reclamației rezultată din această discrepanță <br /> <br />" +
        "5.9.Este strict interzisă utilizarea Serviciului pentru transferuri ilegale și acțiuni frauduloase. La încheierea acestui acord, Utilizatorul se obligă să îndeplinească aceste cerințe și în caz de fraudă să poarte răspunderea penală stabilită de lege. <br /> <br />" +
        "6.10. La prima solicitare Serviciul are dreptul de a transfera informații despre transferul unităților electronice către autoritățile de aplicare a legii, administrarea sistemelor de plată, precum și către victimele acțiunilor ilegale care au suferit ca urmare a fraudei dovedite de autoritățile judiciare. <br /> <br />" +
        "5.11. Utilizatorul se obligă să prezinte toate documentele care dovedesc identitatea sa în caz de suspiciune de fraudă și spălare de bani <br /> <br />" +
        "5.12. Utilizatorul se obligă să nu interfereze cu funcționarea Serviciului și să nu deterioreze software-ul și hardware-ul acestuia, iar Utilizatorul se obligă să furnizeze informații exacte pentru a se asigura că Antreprenorul îndeplinește toți termenii și condițiile contractului. <br / > <br />" +
        "5.13. Utilizatorul este obligat să respecte normele corespunzătoare legislației, precum și să nu modifice fluxurile de comunicare și să nu creeze obstacole în funcționarea normală a codului de program al Serviciului <br /> <br / >" +
        "5.14. Utilizatorului îi este interzis să facă schimburi în favoarea terților <br /> <br /> " +
        "5.15. În cazul tranzacțiilor suspecte, Utilizatorului i se poate solicita verificarea. <br /> <br />" +
        "5.16. În cazul utilizării cardurilor bancare cu comision de la destinatar (pentru utilizarea limitei de credit, carduri pentru plăți sociale etc.) taxa este plătită de către destinatar, serviciul de schimb nu poartă nicio responsabilitate pentru astfel de taxe <br /> <br />" +
        "5.17. Toate plățile efectuate în monede fiat se fac fără a folosi fracții zecimale <br /> <br />" +
        "6. Neprevăzute. <br /> <br />" +
        "6.1 Dacă în procesul de prelucrare a Aplicației Utilizatorului apar circumstanțe neprevăzute care contribuie la neîndeplinirea de către Serviciu a termenilor și condițiilor Acordului, termenele limită pentru îndeplinirea Aplicației sunt amânate pentru perioada corespunzătoare a duratei de forță majoră. . Serviciul nu este responsabil pentru obligațiile restante <br />" +
        "6.2 În cazul în care clientul nu a primit un transfer internațional, vom face o rambursare, perioada de rambursare este de 10 zile lucrătoare <br /> <br />" +
        "7.Reclamații și dispute. <br /> <br />" +
        "7.1 Reclamațiile conform prezentului Acord sunt acceptate de către Serviciu sub forma unui e-mail în care Utilizatorul specifică esența revendicării sau în chat-ul de asistență tehnică al Utilizatorilor. <br /> <br />" +
        "8. Renunțarea la obligații <br /> <br />" +
        "8.1. Serviciul are dreptul de a refuza încheierea contractului și de a îndeplini Aplicația fără a oferi niciun motiv. <br /> <br />" +
        "9. Stocarea și prelucrarea datelor cu caracter personal <br /> <br />" +
        "9.1. Serviciul acceptă date personale de la Utilizator în scopul efectuării de operațiuni, pe care Serviciul se obligă să le stocheze în formă criptată, să nu le facă publice, să nu le transfere către terți, cu excepția cazurilor descrise în clauza 5.9 din prezentul acord 5.9 din acest acord <br /> <br />" +
        "9.2. Serviciul are dreptul, dacă este necesar, să desfășoare în mod independent activități de colectare a datelor suplimentare despre Utilizator prin orice mijloace disponibile. Toate informațiile colectate ca urmare a unor astfel de activități nu sunt făcute publice, nu sunt transferate către terți, cu excepția celor descrise în paragraful 5.9 din acest acord <br /> <br />" +
        "9.3. Serviciul are dreptul de a transfera datele personale ale Utilizatorului și detaliile tranzacțiilor efectuate de către Utilizator, cu condiția ca statutul lor confidențial să fie păstrat la cererea oficială scrisă a Bursei sau a Sistemului de Decontare Electronică/hotărâre judecătorească/din proprie inițiativă ( în caz de necesitate a unei investigații) către autoritățile de aplicare a legii, precum și către Utilizatorul căruia îi aparțin <br /> <br />" +
        "9.4. Toate datele colectate despre Utilizator, precum și detaliile tranzacțiilor efectuate de acesta/ea, vor fi stocate în baza de date a Serviciului timp de cinci ani din momentul executării de către Serviciu a ultimei Comenzi a Utilizatorului",
      Support_q1:
        "Contactarea asistenței tehnice pentru site-ul web este rapidă și ușoară!",
      Support_q2: "Atenţie! Nu scriem niciodată mai întâi!",
      Support_q3: "Online 24/7",
      Support_a1:
        "Echipa noastră de site vă va ajuta să vă rezolvați orice întrebare, asistența Clean Exchange este o echipă experimentată, calificată și de încredere. Alegeți o modalitate de comunicare adecvată și confortabilă și scrieți operatorilor noștri prin e-mail, telegramă sau în fereastra de chat de pe site! Veți primi un răspuns rapid și clar, este atât de ușor!",
      Support_a2:
        "În rețelele de socializare există un număr mare de escroci care vor încerca să vă deturneze banii pretinzând că suntem noi. Este important să știți că nu trimitem niciodată solicitări de adăugare sau trimitere de linkuri rău intenționate. O modalitate excelentă de a vă proteja ar fi să ne adăugați doar printr-un link de pe site, nu printr-o căutare. În caz contrar, nu vă garantăm că veți comunica cu noi și nu cu escrocii al căror scop este obținerea datelor dumneavoastră personale.",
      Support_a3:
        "În serviciul nostru beneficiați de asistență 24/7, puteți adresa orice întrebare operatorilor noștri, indiferent de rata bitcoin în acest moment sau aveți o eroare tehnică la traducere, personalul nostru este întotdeauna gata să vă răspundă! Cu toate acestea, eficiența specialiștilor noștri este la cel mai înalt nivel. Iar numărul lor ne permite să organizăm munca non-stop a serviciului de asistență - fără prânzuri, sărbători și weekenduri.",
      Support_a4: "Telegram - @usdtasia_support",
      Support_a5: "Mail support@usdtasia.com",
      Support_a6: "24/7 - chat pe site",
      Affilate_h: "Programul Afiliat ",
      Affilate_txt1:
        "Programul de afiliere permite utilizatorilor înregistrați să câștige din redevențe afiliate din schimburile de clienți care au venit pe site-ul nostru printr-un link de recomandare. Participarea la program este destul de simplă. Trebuie să vă înregistrați pe site-ul nostru. Și scrieți la asistența tehnică, vi se va oferi linkul personal pentru a face schimbul. Procentajul partenerului depinde de cantitatea totală de schimburi ale recomandărilor dvs. și va varia în funcție de tabel:",
      Affilate_txt2:
        "Retragerea profitului afiliatului se efectuează în fiecare zi. Suma minimă pentru retragere este de 10 USD.",
      Affilate_level: "Nivel",
      Affilate_refs: "Valoarea totală a schimburilor de recomandări ",
      Affilate_yours: "Profitul tău",
      Home_checkboxTxt1:
        "Folosind site-ul și creând un schimb, sunteți de acord",
      Home_checkboxTxt2: "Termenii și condițiile UsdtAsia",
      Home_checkboxTxt3: "şi",
      Home_checkboxTxt4: "Politica de confidențialitate.",
      Order_data: "Data comenzii:",
      Order_rate: "Rata de schimb:",
      Order_statusLong: "Starea procesării comenzii",
      Order_statusShort: "Stare:",
      Order_pay: "PLATEȚI COMANDA",
      Order2_congrat:
        "Felicitări! Aproape ați finalizat schimbul, pentru a-l finaliza, urmați acești pași",
      Order2_toFinish1: "Pentru a finaliza tranzacția",
      Order2_toFinish2: "pentru suma de:",
      Order2_toFinish3: "va trebui să faceți următoarele:",
      Order2_inst1: "Efectuați o plată folosind detaliile furnizate mai jos",
      Order2_inst2: "Așteptați ca tranzacția să fie confirmată în rețea.",
      Order2_inst3: "Așteptați ca fondurile dvs. să fie transferate",
      Order2_attention1: "Atenţie! ",
      Order2_attention2:
        "Înainte de a plăti, deschideți e-mailul și verificați numărul portofelului specificat mai jos cu numărul primit în mesajul de e-mail. Numerele portofelului trebuie să se potrivească. Dacă nu se potrivesc, nu efectuați plata și contactați asistența! Verificarea numărului portofelului este OBLIGATORIE.",
      Order2_qr1: "Valută:",
      Order2_qr2: "Detalii:",
      Order2_qr3: "Copiați adresa",
      Order2_t1:
        "* În funcție de țară, fondurile se eliberează la birou sau printr-un reprezentant.",
      Order2_t2:
        "* Pentru sume de peste 10.000 USD în echivalent, un schimb este posibil la birou sau cu participarea unui reprezentant. Această opțiune este individuală și depinde de o serie de factori.",
      Order2_t3:
        "* REȚINEȚI că tranzacțiile cu criptomonede nu sunt revocabile. Verificați cu atenție adresa la care trimiteți fondurile. Nu vom putea returna fondurile dacă sunt trimise într-un portofel greșit.",
      Order2_t4:
        "* Tranzacția este considerată confirmată după 3 confirmări pentru rețeaua Bitcoin.",
      Order2_cancel: "ANULAȚI COMANDA",
      Order2_paid: "COMANDA PLATITA",
      History_1: "DATA",
      History_2: "DARE",
      History_3: "CANTITATE",
      History_4: "PRIMIREA",
      History_5: "STARE",
      Login_1: "Log in",
      Login_2: "Înregistrare",
      Login_3: "Parolă",
      Login_4: "Ați uitat parola?",
      Login_5: "Ține-mă minte",
      Login_6: "LOG IN",
      Registration_1: "Repetați parola",
      Registration_2: "Am citit și sunt de acord cu termenii și condițiile",
      Registration_3: "REGISTRU",
    },
  },
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
  react: {
    transKeepBasicHtmlNodesFor: ["strong", "br"],
  },
});

export default i18n;
