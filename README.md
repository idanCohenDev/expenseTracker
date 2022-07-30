# expenseTracker

An application that's made to control, track and mange your expenses and incomes for better financal care.

**All expenses screen**: 

The "All Expenses" screen is the default route which shows all the expenses, income and balance for a user. 

<img src="https://user-images.githubusercontent.com/97622278/181907755-6d19eb66-4393-4b02-9c57-df13e4b070eb.PNG" width="400" />

**Drawer**:

The project involve tabs navigation in order to navigate between "All Expenses", "Add Expense" and "Monthly" screens and also a drawer navigation in order to display expenses for a given type of expense. 

<img src="https://user-images.githubusercontent.com/97622278/181908095-706c37eb-8005-4083-9f87-4f91e66eab39.PNG" width="400" />

**Adding expense**: 

To add an expense a user need to press the "+" sign in the tabs navigator and in the "Add Expense" page enter the amount, choose if the expense is expense or income, optionally enter a description and select the date for the transaction.

<img src="https://user-images.githubusercontent.com/97622278/181908183-e60a7294-f397-4fad-a1f2-74543dc23d34.PNG" width="400" />

If the user is missing one of the required fields the application will alert him.

<img src="https://user-images.githubusercontent.com/97622278/181908222-6283f56d-3964-4e3b-be00-f40982044425.PNG" width="400" />

If the user chooses the "Expense" type a button will appear which opens a dropdown in order to select the category the expense belongs to.

<img src="https://user-images.githubusercontent.com/97622278/181908263-99a988d1-e664-498e-83fc-7857842f59e3.PNG" width="400" />

After all the fields were entered correctly a new transactions will show up on the screen and the total blanace will change.

<img src="https://user-images.githubusercontent.com/97622278/181908309-6c0fb3f7-813c-4037-a375-e1ba31389681.PNG" width="400" />

**Monthly screen**:

In the "Monthly" route a user can select a perticular month and a year and get all the expenses or incomes for a specific month (the default month is always the current month).

<img src="https://user-images.githubusercontent.com/97622278/181908360-b0ed6ee3-2891-482a-80a5-9236697f566a.PNG" width="400" />

**Extra features**: 

In order to differ between expense and income just below the total blance and above the transactions display there are three buttons to filter "Expenses" and "Income".

<img src="https://user-images.githubusercontent.com/97622278/181908530-12c3b22f-fa8f-4334-b296-bff719f74046.PNG" width="400" />

<img src="https://user-images.githubusercontent.com/97622278/181908538-ea0e20a0-dc9e-433d-bd61-9bf5b49b5658.PNG" width="400" />

A delete feature was added so a user can slidea transaction and remove it from the application and from the total balance.

<img src="https://user-images.githubusercontent.com/97622278/181908680-f0605234-23ac-4a71-8b83-5700205b90ef.PNG" width="400" />

<img src="https://user-images.githubusercontent.com/97622278/181908693-f32afe7e-83fa-4664-992e-e988c50bf459.PNG" width="400" />

**Notes**: 

A backend setup is still in production for now it's a frontend only application.

App wide state is supported by the context API.








