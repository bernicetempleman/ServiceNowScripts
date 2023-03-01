/*
Review a Catalog UI Policy to see how to display specific location fields.
The Catalog UI policy should allow:
o Regular users who order a 'Brother Network-Ready Printer Cartridge' are only provided a list of California locations as delivery options.
o Users with the 'itil_admin' role can choose a location outside of California, however they will receive a message reminding them that additional charges will be applied to the receiving location.
Note: As with Lab 4.1, most of the steps in this Lab have already been performed for you. Oh, sure, you'll need to write a few lines of script in this Lab, but the heavy lifting has already been done for you, so no whining.
Also, this Lab introduces Reference qualifiers, which are basically filters. Reference qualifiers are covered in more detail in a later module.
Lab Dependency: You must complete Lab 4.1, Control Variable Choices Catalog Client Script, before starting this exercise since it builds on the Catalog Item created in the previous lab.
A. Create a Variable to Confirm a California Delivery
1. Navigate to Service Catalog > Catalog Definitions > Maintain Items.
2. Locate and open the Brother Network-Ready Printer Toner Catalog Item.

Select New on the Variables Related List.
Question
Type: Select Box
Order: 200
Question: California delivery?
Name: ca_location
Default Value
Default value: yes

Save the record to remain on the form.
8. Select New on the Question Choices Related List.
Order: 100
Text: Yes
Value: yes
9. Select Submit.
10. Repeat steps 8-9 to add a NO Question Choice as well.
Order: 200
Text: No
Value: no
11. Select Submit and Update.
B. Create Two Variables to Provide Location Selections
1. On the Brother Network-Ready Printer Toner Catalog Item form, select New on the Variables Related List.
2. Create a California locations only reference field.
Type: Reference
Order: 300
Question
Question: Select a California location for delivery
Name: location_ca
Type Specifications tab
Reference: Location [cmn_location]
Reference qualifier condition: State/Province | contains | CA
3. Select Submit.
4. Select New on the Variables Related List again.
5. Create a non-California locations reference field.
Type: Reference
Order: 400
Question
Question: Select a location outside of California for delivery
Name: location_other

Type Specifications tab
Reference: Location [cmn_location]
Reference qualifier condition: State/Province | does not contain | CA
6. Select Submit.
7. Compare your Brother Network-Ready Printer Toner Variable records with the image below. Since you are double-checking, hopefully everything is fine.

the 'itil_admin' Role
1. On the Brother Network-Ready Printer Toner Catalog Item form, open the Toner Choices by Role Catalog Client Script you created in Lab 4.1.
2. Add statements to the existing script to also restrict the display of the California delivery? [ca_location] and Select a location outside of California for delivery [location_other] fields to users with the 'itil_admin' role.
3. Select Update.
D. Use a Catalog UI Policy to Display the Correct Location Fields
Since the Catalog Client Script is already controlling who can view the California delivery [ca_location] and Select a location outside of California for delivery [location_other] fields, only one Catalog UI Policy is needed to display the correct Location field to the users who can see the fields, as well as script the display of user-friendly Field messages.
Note: For Section D you are basically verifying that the Catalog UI Policy has been pre-configured for you.

From the Brother Network-Ready Printer Toner Catalog Item form, verify that the following is displayed on the Catalog UI Policies Related List.
Short description: Display Location Options
Catalog Conditions: ca_location | is | No
2. Save the record to remain on the form.
3. Compare your Catalog UI Policy Actions with the image below. If it matches, go to Section E, step 1. If not, go to the next step and add the variables.
4. Select New on the Catalog UI Policy Actions Related List.
Variable name: location_ca
Visible: False
5. Select Submit.
6. Add one more Catalog UI Policy Action.
Variable name: location_other
Visible: True
7. Compare your newly created Catalog UI Policy Actions with the image below.
E. Inform Users of Additional Shipping Fees Outside of California
1. Select the Script tab on the Display Location Options Catalog UI Policy form.
2. Select (check) the Run scripts field.
3. Examine the pseudo-code for the script you will write:
• If the item is not being delivered to a California location
o Add a field message below the 'Select a Location' field advising the user that additional shipping fees apply to out of State deliveries.
• If the item is being delivered to a California location
o Ensure no field messages are on the form.
4. Write the Execute if true script.
5. Write the Execute if false script.
6. Select Update.
F. Test Your Work
*/

//execute if true
function onCondition() {
	//Enter script for Lab 4.2 Step E4 below.
	//using 'error' as the Type for high impact on the form
	g_form.showFieldMsg('location_other', 'PLEASE NOTE: Additional shipping fees apply to out of state deliveries. The location you select in this fields will be charged any additional costs.', 'error');
}

//execute if false
function onCondition() {
    //Enter script for Lab 4.2 Step E5 below.
    g_form.hideAllFieldMsgs();
}