// Email Validation
//
// Implement function that checks if an email address is valid.
// An email is composed of two parts: A local-part and a domain-part.
// The two parts are separated by an @sign giving the following basic structure: local-part@domain-part. T
// he local-part is the name of the mailbox which is often the username.
// The domain-part is the domain name (i.e gmail.com, yahoo.com.ph, or myCompanyName.com).
// Its composed of a mail server and a top level domain.
//
// Given this, consider the following as criteria for an email to be valid for this exercise:
//
// there must be one @ sign.
// the local-part may contain the following characters:
// upper and lower case letters from A to Z or a to z
// digits 0 to 9
// the domain-part must meet the following criteria
// upper and lower case letters from A to Z or a to z
// the components must be separated by a dot.
// For simplicity, no need to check that the top level domain and the county code top level domains are "real" or "official".
// They only need to be separated by dots(.).
//
// Note: don't use this for real email validation logic in your programs. This is just an exercise with a very simplified set of rules on email validation.
//
// Examples

function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/);
}

isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
