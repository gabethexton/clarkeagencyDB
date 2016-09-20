'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('resources').insert({
            id: 1,
            category: 'Real Estate',
            subcategory: "Resources for Buyers",
            title: 'Steps in Determining if You Can Afford to Purchase a Home',
            agent_id: 1,
            text: "For most people, especially if you plan to stay in one place for a reasonable period of time, the idea of paying a mortgage is much more enticing than paying rent. However, it's important to understand all of the costs involved in buying a home, and the level of risk that you feel comfortable with. It's important to factor in the down payment, homeowners insurance, real property taxes, closing costs, repairs, maintenance, as well as the payment, when determining what costs are associated with home ownership. Financing your new home To determine whether or not you can afford to buy a home, you should first calculate the property value of homes that interest you. This is determined by comparing the prices of homes recently sold of similar size, and preferably, in the same neighborhood. Realtors can easily help you with this process. Next, you should visit with one or more lenders (these can be banks, savings and loans, or mortgage brokers), and compare their required down payment, interest rate, and closing costs. Make sure you are comparing apples to apples, when visiting with lenders. If you are putting down less than 20 percent of the property value, you'll need to factor in private mortgage insurance (PMI), which is a policy that allows mortgage lenders to recover part of their financial losses if a borrower fails to fully repay a loan. Typically, the lower the down payment, the higher the monthly PMI, which often costs between $50 and $150 per month. MoneyLenders should be able to give you an estimate of your closing costs, including points (the dollar amount paid to a lender for obtaining the loan), taxes, recording fees, inspections, prepaid interest, title insurance, appraisal, hazard insurance and tax reserves, etc. These will generally add up to between three and nine percent of the loan value. Add these costs to your required down payment, and you're on your way to determining how much money you'll need up front to buy a house. Don't forget to consider actual/physical moving costs. Whether you hire a moving company or do it yourself, it will cost money. Be sure to budget for taxes and insurance, unless of course they are being escrowed into an impound account, where your lender will collect these amounts from you monthly and pay them annually, on your behalf. You'll still need to budget for repairs and maintenance, as well as utilities. If the home is older and hasn't been remodeled, you may need to have some money in savings for the 'what if's' (i.e. roof, heat or air conditioning systems, plumbing, electric). In your final analysis of whether you can afford to buy a home, condominium, or townhouse, you'll want to weigh the costs with the financial benefits, the tax benefits, and the appreciation factor. The best benefit of all will be the satisfaction of knowing that the home you live in is your very own.",
        }),
        knex('resources').insert({
            id: 2,
            category: 'Small Business',
            subcategory: "",
            title: 'Why Write a Business Plan?',
            agent_id: 2,
            text: "Most people believe that a business plan is that behemoth of a document that lenders and investors require you to make to get your money. This is one purpose of the business plan, but there are others. Business plans also aid the entrepreneur in determining the feasibility of an idea. Once your business is up and running, the plan will provide much needed direction in operating your business. Virtually all start-up businesses must secure capital—usually from a bank or investor. The bank is offering you the use of depositors’ money that is entrusted to their care. As the trustee for other peoples’ money, the bank wants to lessen the risk of loss to their institution. A business plan shows that you’ve spent considerable time and effort into designing and predicting the financial future of the business. The cash flow statement will show capital providers whether or not you’ll be able to pay them back. The balance sheet will demonstrate how much of your own investment is in the firm, compared to the investments of others. The banker and investor will look at your plan with a “fine tooth comb” to assure him/herself that you are realistic and knowledgeable in your projections. They’ll be able to tell if and when your business will break-even, and if your numbers are realistic. Additionally, a business plan acts as a feasibility study. It forces you to put your ideas on paper to make more rational, non-emotional decisions. You may be the best cabinet maker in town, but if there’s no market for a cabinet maker, your chances of success are slim. The business plan forces you to take a look at your competition, your start-up costs, and whether or not you’ll make enough money to pay your bills and yourself. It’s important to be enthusiastic about your business. However, that enthusiasm shouldn’t override business viability. Lastly, your plan will be a road map or blueprint that gives much needed direction to your firm. Entrepreneurs too often get so wrapped up in day to day operations that they fail to plan. Using the plan actively will make the business owner's life easier and will be a useful control measure to compare actual performance to what was predicted. It’s fine if your business isn’t exactly on track as planned, but if it’s not, determine why and make any necessary adjustments. Writing a business plan is a project that involves numerous integrated steps. Many business plans have been written for businesses that have never been started. If the plan keeps you from mortgaging your house, cashing in your retirement, or investing your savings in a venture that is sure to fail, then the plan has done its job. If the plan helps you raise capital, prove feasibility, and plan for operations, you’ll increase your chance of being a successful entrepreneur."
        }),
        knex('resources').insert({
            id: 3,
            category: 'FAQ',
            subcategory: "Resources for Buyers",
            title: 'How can I build equity into my house?',
            agent_id: 3,
            text: "You can build equity in three ways. First (and easiest) is from market appreciation. Second, when making your monthly mortgage payment, try to send a little bit more. This will go directly to the principal of the loan, rather than the interest. Be sure your lender knows to put the extra toward principal, and not the next month’s payment. Even an extra $50 per month can quickly build equity, as well as knock years off of your loan."
        }),
        knex.raw('ALTER SEQUENCE resources_id_seq RESTART WITH 4')
      ]);
    });
};
