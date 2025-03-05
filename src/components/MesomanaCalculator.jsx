import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const MesomanaCalculator = () => {
  // Direct Costs
  const [sockManufacturing, setSockManufacturing] = useState(3.50);
  const [sockPackaging, setSockPackaging] = useState(0.75);
  const [sockShipping, setSockShipping] = useState(0.45);
  
  const [underwearManufacturing, setUnderwearManufacturing] = useState(5.75);
  const [underwearPackaging, setUnderwearPackaging] = useState(1.00);
  const [underwearShipping, setUnderwearShipping] = useState(0.60);
  
  // Indirect Costs
  const [sockFulfillment, setSockFulfillment] = useState(0.85);
  const [sockCustomerService, setSockCustomerService] = useState(0.50);
  const [sockReturns, setSockReturns] = useState(0.75);
  const [sockPaymentProcessing, setSockPaymentProcessing] = useState(0.65);
  
  const [underwearFulfillment, setUnderwearFulfillment] = useState(0.85);
  const [underwearCustomerService, setUnderwearCustomerService] = useState(0.50);
  const [underwearReturns, setUnderwearReturns] = useState(1.25);
  const [underwearPaymentProcessing, setUnderwearPaymentProcessing] = useState(1.05);
  
  // Overhead
  const [sockMarketing, setSockMarketing] = useState(3.95);
  const [sockTech, setSockTech] = useState(0.75);
  const [sockStorage, setSockStorage] = useState(0.35);
  const [sockAdmin, setSockAdmin] = useState(0.65);
  
  const [underwearMarketing, setUnderwearMarketing] = useState(6.25);
  const [underwearTech, setUnderwearTech] = useState(1.10);
  const [underwearStorage, setUnderwearStorage] = useState(0.55);
  const [underwearAdmin, setUnderwearAdmin] = useState(0.95);
  
  // Sales Projections
  const [sockUnitsPerMonth, setSockUnitsPerMonth] = useState([150, 225, 335, 470, 610, 790, 950, 1140, 1350, 1550, 1780, 2220]);
  const [underwearUnitsPerMonth, setUnderwearUnitsPerMonth] = useState([75, 110, 165, 230, 300, 390, 470, 560, 660, 760, 870, 1090]);
  
  // Fixed Monthly Expenses
  const [marketingBase, setMarketingBase] = useState(3500);
  const [software, setSoftware] = useState(450);
  const [team, setTeam] = useState(4500);
  const [office, setOffice] = useState(800);
  const [insurance, setInsurance] = useState(300);
  
  // Calculated Values
  const [sockDirectCosts, setSockDirectCosts] = useState(0);
  const [sockIndirectCosts, setSockIndirectCosts] = useState(0);
  const [sockOverhead, setSockOverhead] = useState(0);
  const [sockTotalCosts, setSockTotalCosts] = useState(0);
  const [sockRetailPrice, setSockRetailPrice] = useState(0);
  const [sockProfit, setSockProfit] = useState(0);
  const [sockProfitMargin, setSockProfitMargin] = useState(0);
  
  const [underwearDirectCosts, setUnderwearDirectCosts] = useState(0);
  const [underwearIndirectCosts, setUnderwearIndirectCosts] = useState(0);
  const [underwearOverhead, setUnderwearOverhead] = useState(0);
  const [underwearTotalCosts, setUnderwearTotalCosts] = useState(0);
  const [underwearRetailPrice, setUnderwearRetailPrice] = useState(0);
  const [underwearProfit, setUnderwearProfit] = useState(0);
  const [underwearProfitMargin, setUnderwearProfitMargin] = useState(0);
  
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);
  const [monthlyCosts, setMonthlyCosts] = useState([]);
  const [monthlyProfit, setMonthlyProfit] = useState([]);
  const [totalAnnualRevenue, setTotalAnnualRevenue] = useState(0);
  const [totalAnnualProfit, setTotalAnnualProfit] = useState(0);
  const [totalAnnualProfitMargin, setTotalAnnualProfitMargin] = useState(0);
  
  const [totalFixedCosts, setTotalFixedCosts] = useState(0);
  const [breakEvenUnits, setBreakEvenUnits] = useState(0);
  const [breakEvenRevenue, setBreakEvenRevenue] = useState(0);
  
  // Calculate derived values
  useEffect(() => {
    // Socks calculations
    const directCostsSock = sockManufacturing + sockPackaging + sockShipping;
    const indirectCostsSock = sockFulfillment + sockCustomerService + sockReturns + sockPaymentProcessing;
    const overheadSock = sockMarketing + sockTech + sockStorage + sockAdmin;
    const totalCostsSock = directCostsSock + indirectCostsSock + overheadSock;
    const profitMarginSock = 0.342; // 34.2%
    const profitSock = totalCostsSock / (1 - profitMarginSock) - totalCostsSock;
    const retailPriceSock = totalCostsSock + profitSock;
    
    setSockDirectCosts(directCostsSock);
    setSockIndirectCosts(indirectCostsSock);
    setSockOverhead(overheadSock);
    setSockTotalCosts(totalCostsSock);
    setSockProfit(profitSock);
    setSockRetailPrice(retailPriceSock);
    setSockProfitMargin(profitMarginSock * 100);
    
    // Underwear calculations
    const directCostsUnderwear = underwearManufacturing + underwearPackaging + underwearShipping;
    const indirectCostsUnderwear = underwearFulfillment + underwearCustomerService + underwearReturns + underwearPaymentProcessing;
    const overheadUnderwear = underwearMarketing + underwearTech + underwearStorage + underwearAdmin;
    const totalCostsUnderwear = directCostsUnderwear + indirectCostsUnderwear + overheadUnderwear;
    const profitMarginUnderwear = 0.338; // 33.8%
    const profitUnderwear = totalCostsUnderwear / (1 - profitMarginUnderwear) - totalCostsUnderwear;
    const retailPriceUnderwear = totalCostsUnderwear + profitUnderwear;
    
    setUnderwearDirectCosts(directCostsUnderwear);
    setUnderwearIndirectCosts(indirectCostsUnderwear);
    setUnderwearOverhead(overheadUnderwear);
    setUnderwearTotalCosts(totalCostsUnderwear);
    setUnderwearProfit(profitUnderwear);
    setUnderwearRetailPrice(retailPriceUnderwear);
    setUnderwearProfitMargin(profitMarginUnderwear * 100);
    
    // Calculate monthly revenues and profits
    const revenueByMonth = sockUnitsPerMonth.map((sockUnits, index) => {
      const underwearUnits = underwearUnitsPerMonth[index];
      return sockUnits * retailPriceSock + underwearUnits * retailPriceUnderwear;
    });
    
    const costsByMonth = sockUnitsPerMonth.map((sockUnits, index) => {
      const underwearUnits = underwearUnitsPerMonth[index];
      return sockUnits * totalCostsSock + underwearUnits * totalCostsUnderwear;
    });
    
    const fixedCostMonthly = marketingBase + software + team + office + insurance;
    setTotalFixedCosts(fixedCostMonthly);
    
    const profitByMonth = revenueByMonth.map((revenue, index) => {
      return revenue - costsByMonth[index] - fixedCostMonthly;
    });
    
    setMonthlyRevenue(revenueByMonth);
    setMonthlyCosts(costsByMonth);
    setMonthlyProfit(profitByMonth);
    
    const annualRevenue = revenueByMonth.reduce((sum, rev) => sum + rev, 0);
    const annualProfit = profitByMonth.reduce((sum, prof) => sum + prof, 0);
    
    setTotalAnnualRevenue(annualRevenue);
    setTotalAnnualProfit(annualProfit);
    setTotalAnnualProfitMargin((annualProfit / annualRevenue) * 100);
    
    // Break-even calculation
    const avgContributionMargin = (profitSock + profitUnderwear) / 2;
    const beUnits = fixedCostMonthly / avgContributionMargin;
    const beRevenue = beUnits * ((retailPriceSock + retailPriceUnderwear) / 2);
    
    setBreakEvenUnits(beUnits);
    setBreakEvenRevenue(beRevenue);
    
  }, [
    sockManufacturing, sockPackaging, sockShipping, 
    sockFulfillment, sockCustomerService, sockReturns, sockPaymentProcessing,
    sockMarketing, sockTech, sockStorage, sockAdmin,
    underwearManufacturing, underwearPackaging, underwearShipping,
    underwearFulfillment, underwearCustomerService, underwearReturns, underwearPaymentProcessing,
    underwearMarketing, underwearTech, underwearStorage, underwearAdmin,
    sockUnitsPerMonth, underwearUnitsPerMonth,
    marketingBase, software, team, office, insurance
  ]);

  return (
    <div className="flex flex-col gap-6 p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Mesomana Financial Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Input Section */}
            <div className="col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Direct Costs (Per Unit)</h3>
                
                <div className="border p-4 rounded-md space-y-2">
                  <h4 className="font-medium">Socks</h4>
                  <div className="flex justify-between">
                    <label>Manufacturing:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={sockManufacturing} 
                      onChange={(e) => setSockManufacturing(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Packaging:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={sockPackaging} 
                      onChange={(e) => setSockPackaging(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Shipping Materials:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={sockShipping} 
                      onChange={(e) => setSockShipping(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                </div>
                
                <div className="border p-4 rounded-md space-y-2">
                  <h4 className="font-medium">Underwear</h4>
                  <div className="flex justify-between">
                    <label>Manufacturing:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={underwearManufacturing} 
                      onChange={(e) => setUnderwearManufacturing(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Packaging:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={underwearPackaging} 
                      onChange={(e) => setUnderwearPackaging(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Shipping Materials:</label>
                    <input 
                      type="number" 
                      step="0.01" 
                      min="0" 
                      value={underwearShipping} 
                      onChange={(e) => setUnderwearShipping(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Fixed Monthly Expenses</h3>
                <div className="border p-4 rounded-md space-y-2">
                  <div className="flex justify-between">
                    <label>Marketing Base:</label>
                    <input 
                      type="number" 
                      step="100" 
                      min="0" 
                      value={marketingBase} 
                      onChange={(e) => setMarketingBase(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Software/Tools:</label>
                    <input 
                      type="number" 
                      step="10" 
                      min="0" 
                      value={software} 
                      onChange={(e) => setSoftware(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Team/Contractors:</label>
                    <input 
                      type="number" 
                      step="100" 
                      min="0" 
                      value={team} 
                      onChange={(e) => setTeam(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Office/Workspace:</label>
                    <input 
                      type="number" 
                      step="50" 
                      min="0" 
                      value={office} 
                      onChange={(e) => setOffice(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between">
                    <label>Insurance/Legal:</label>
                    <input 
                      type="number" 
                      step="50" 
                      min="0" 
                      value={insurance} 
                      onChange={(e) => setInsurance(parseFloat(e.target.value))} 
                      className="border rounded px-2 w-24 text-right"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Results Section */}
            <div className="col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Product Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-md space-y-2">
                    <h4 className="font-medium">Socks</h4>
                    <div className="flex justify-between">
                      <span>Direct Costs:</span>
                      <span>${sockDirectCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Indirect Costs:</span>
                      <span>${sockIndirectCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overhead:</span>
                      <span>${sockOverhead.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total Costs:</span>
                      <span>${sockTotalCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Profit:</span>
                      <span>${sockProfit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Profit Margin:</span>
                      <span>{sockProfitMargin.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Retail Price:</span>
                      <span>${sockRetailPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-md space-y-2">
                    <h4 className="font-medium">Underwear</h4>
                    <div className="flex justify-between">
                      <span>Direct Costs:</span>
                      <span>${underwearDirectCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Indirect Costs:</span>
                      <span>${underwearIndirectCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overhead:</span>
                      <span>${underwearOverhead.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total Costs:</span>
                      <span>${underwearTotalCosts.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Profit:</span>
                      <span>${underwearProfit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Profit Margin:</span>
                      <span>{underwearProfitMargin.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Retail Price:</span>
                      <span>${underwearRetailPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Business Profitability</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-4 rounded-md space-y-2">
                    <h4 className="font-medium">Annual Summary</h4>
                    <div className="flex justify-between">
                      <span>Total Annual Revenue:</span>
                      <span>${totalAnnualRevenue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Annual Profit:</span>
                      <span>${totalAnnualProfit.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Annual Profit Margin:</span>
                      <span>{totalAnnualProfitMargin.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Fixed Costs:</span>
                      <span>${totalFixedCosts.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-md space-y-2">
                    <h4 className="font-medium">Break-Even Analysis</h4>
                    <div className="flex justify-between">
                      <span>Break-Even Units (Monthly):</span>
                      <span>{Math.ceil(breakEvenUnits)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Break-Even Revenue (Monthly):</span>
                      <span>${breakEvenRevenue.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Monthly Revenue & Profit Projection</h3>
                <div className="border p-4 rounded-md overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 text-left">Month</th>
                        <th className="py-2 text-right">Revenue</th>
                        <th className="py-2 text-right">Profit</th>
                        <th className="py-2 text-right">Margin</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyRevenue.map((revenue, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-1">{index + 1}</td>
                          <td className="py-1 text-right">${revenue.toFixed(2)}</td>
                          <td className="py-1 text-right">${monthlyProfit[index].toFixed(2)}</td>
                          <td className="py-1 text-right">
                            {((monthlyProfit[index] / revenue) * 100).toFixed(1)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MesomanaCalculator;
