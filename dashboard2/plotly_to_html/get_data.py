import pandas as pd
import yfinance as yf
 
import plotly.express as px


# date
start_date = "2023-03-24"
end_date = "2024-03-24"

# download spy data and get  cumulative returns up to each date
df_spy = yf.download("SPY",
                 start=start_date,
                 end=end_date,
                 auto_adjust=False,
                 progress=False)

df_spy["simple_rtn"] = df_spy["Adj Close"].pct_change()
df_spy = df_spy.loc[:, ["Adj Close", "simple_rtn"]]
#df = df.dropna()
df_spy['S&P500'] = ((1 + df_spy['simple_rtn']).cumprod() - 1)*100
df_spy.fillna(0, inplace=True)

# Convert index to a column
df_spy.reset_index(inplace=True)
df_spy.rename(columns={'index': 'Date'}, inplace=True)


#Download Microsoft’s stock prices from 2020 and calculate simple returns:
df = yf.download("MSFT",
                 start=start_date,
                 end=end_date,
                 auto_adjust=False,
                 progress=False)
df["simple_rtn"] = df["Adj Close"].pct_change()
df = df.loc[:, ["Adj Close", "simple_rtn"]]
#df = df.dropna()
df['My portfolio'] = ((1 + df['simple_rtn']).cumprod() - 1)*100
df.fillna(0, inplace=True)

# Convert index to a column
df.reset_index(inplace=True)
df.rename(columns={'index': 'Date'}, inplace=True)


df_combined = pd.concat([df_spy.loc[:, ['Date','S&P500']], df.loc[:, ['My portfolio']]], axis=1)


print(df_combined)

df_combined.to_csv('returns.csv', index=False)


