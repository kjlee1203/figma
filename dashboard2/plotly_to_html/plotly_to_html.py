import pandas as pd
import yfinance as yf
 
import plotly.express as px

df_combined = pd.read_csv('returns.csv')

# Melt DataFrame to long format for Plotly Express
df_melted = df_combined.melt(id_vars='Date', var_name='Legend', value_name='Cumulative returns(%)')

# Plot using Plotly Express
fig = px.line(df_melted, x='Date', y='Cumulative returns(%)', color='Legend')

# Show plot
#fig.show()
# convert to html
fig.write_html("./my_stock.html")