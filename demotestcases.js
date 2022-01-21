import { Selector} from  'testcafe'
const email = Selector('#email');
const password = Selector('#passwordInput');
const registerButton = Selector ('#register');
const loginButton = Selector ('#loginButton');
const signoutButton = Selector('.mjp8WyYQODySClV2byHt');
fixture ("Sign up")
.page("https://www.evernote.com/Registration.action?referralSpecifier=mktgrepack_en_oo_web_cpl_V00");

test("Sign up functionality", async t => {

await t
.typeText(email,'#rajendratester1116@gmail.com')
.typeText(password,'#Hemu@1234')
.click(registerButton());
   
});

test("Sign in functionality", async t=>{

await t         
.typeText(email,'#rajendratester1116@gmail.com')
.click(loginButton())
.typeText(password,'#Hemu@1234');
});

test("Sign out functionality", async t=>{

    await t 
    .click(Accountbutton())
    .click(SignoutButton());

});

test ("Sign in with incorrect Credentials ", async t=>{
       
    await t 
    .typeText(email,'#rajendratester1114@gmail.com')
    .click(loginButton())
    .typeText(password,'#Hemu@1234');


});