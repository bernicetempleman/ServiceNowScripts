//Catalogue client script
/*

Name: Brother Network-Ready Printer Toner
Catalogs: Service Catalog
Category: Printers
Short Description: Brother TN 2000 Series Toner
Description: Yields approximately 1200 pages
Flow (on Process Engine Tab): Service Catalog Item Request
Picture (on Picture Tab): Toner.png (included in your instance)

Create a Variable to Contain the Available Cartridge Types
1. Select New on the Variables Related List.
Type: Select Box
Order: 100
On the Question Tab
Question: Which pack type would you like to order?
Name: pack_type
On the Type Specification Tab
Include none: Selected (checked)
2. Save the record to remain on the form.
3. Select New on the Question Choices Related List.
Price: 60.00
Order: 100
Text: Black Cartridge – Single
Value: black1
4. Select Submit.
5. Repeat steps 3 and 4 to add these additional Question Choices.
Price
Order
Text
Value
260.00
200
Black Cartridges – 5 Pack
black5
150.00
300
CYM Cartridges – 3 Pack (1 of each color)
cym3
250.00
400
CYM Cartridges – 6 Pack (2 of each color)
cym6
6. Compare your Which pack type would you like to order? Variable record with the image below and make any adjustments if necessary.
Consider configuring the Question Choices List Layout to include the Price and Order columns. Select the Personalize List icon and move the Price and Order columns from the Available to the Selected List. Then Save the changes.
7. Select Update.
8. Select Try It on the Brother Network-Ready Printer Toner Catalog Item's Header bar.
9. Verify the price information in the shopping cart changes as expected.

Now that the Catalog Item is in place, you can create the script to remove the choices as described in the Lab goal.
1. On the Brother Network-Ready Printer Toner Catalog Item form, scroll down to the Catalog Client Scripts Related List and select Toner Choices by Role.
2. Verify the record.
Active: Selected (checked)
Type: onLoad
Note: Notice the Applies on a Catalog Item view field is pre-populated. This is because you navigated to this form from a Catalog Item record.
3. Save the record to remain on the form.
4. Examine the pseudo-code for the script you will write.
• If the logged-in user does not have the itil_admin role
o Hide the CYM Cartridges – 3 Pack (1 of each color) [cym3] option.
o Hide the CYM Cartridges – 6 Pack (2 of each color) [cym6] option.
*/
function onLoad() {
    //
    // 	If the logged-in user does not have the itil_admin role
    // o Hide the CYM Cartridges – 3 Pack (1 of each color) [cym3] option.
    // o Hide the CYM Cartridges – 6 Pack (2 of each color) [cym6] option.
    if (!g_user.hasRoleExactly('itil_admin')) {
        g_form.removeOption('pack_type', 'cym3');
        g_form.removeOption('pack_type', 'cym6');
		g_form.setDisplay('location_ca', false);
		g_form.setDisplay('location_other', false);
    }
}