//房贷计算器
Calculator = {};
//定义利率
lilv_array = new Array;
//2004年之前的旧利率
lilv_array[1] = new Array;
lilv_array[1][1] = new Array;
lilv_array[1][2] = new Array;
lilv_array[1][1][5] = 0.0477;//商贷 1～5年 4.77%
lilv_array[1][1][10] = 0.0504;//商贷 5-30年 5.04%
lilv_array[1][2][5] = 0.0360;//公积金 1～5年 3.60%
lilv_array[1][2][10] = 0.0405;//公积金 5-30年 4.05%
//2005年	1月的新利率
lilv_array[2] = new Array;
lilv_array[2][1] = new Array;
lilv_array[2][2] = new Array;
lilv_array[2][1][5] = 0.0495;//商贷 1～5年 4.95%
lilv_array[2][1][10] = 0.0531;//商贷 5-30年 5.31%
lilv_array[2][2][5] = 0.0378;//公积金 1～5年 3.78%
lilv_array[2][2][10] = 0.0423;//公积金 5-30年 4.23%
//2006年	1月的新利率下限
lilv_array[3] = new Array;
lilv_array[3][1] = new Array;
lilv_array[3][2] = new Array;
lilv_array[3][1][5] = 0.0527;//商贷 1～5年 5.27%
lilv_array[3][1][10] = 0.0551;//商贷 5-30年 5.51%
lilv_array[3][2][5] = 0.0396;//公积金 1～5年 3.96%
lilv_array[3][2][10] = 0.0441;//公积金 5-30年 4.41%
//2006年	1月的新利率上限
lilv_array[4] = new Array;
lilv_array[4][1] = new Array;
lilv_array[4][2] = new Array;
lilv_array[4][1][5] = 0.0527;//商贷 1～5年 5.27%
lilv_array[4][1][10] = 0.0612;//商贷 5-30年 6.12%
lilv_array[4][2][5] = 0.0396;//公积金 1～5年 3.96%
lilv_array[4][2][10] = 0.0441;//公积金 5-30年 4.41%
//2006年	4月28日的新利率下限
lilv_array[5] = new Array;
lilv_array[5][1] = new Array;
lilv_array[5][2] = new Array;
lilv_array[5][1][5] = 0.0551;//商贷 1～5年 5.51%
lilv_array[5][1][10] = 0.0575;//商贷 5-30年 5.75%
lilv_array[5][2][5] = 0.0414;//公积金 1～5年 4.14%
lilv_array[5][2][10] = 0.0459;//公积金 5-30年 4.59%
//2006年	4月28日的新利率上限
lilv_array[6] = new Array;
lilv_array[6][1] = new Array;
lilv_array[6][2] = new Array;
lilv_array[6][1][5] = 0.0612;//商贷 1～5年 6.12%
lilv_array[6][1][10] = 0.0639;//商贷 5-30年 6.39%
lilv_array[6][2][5] = 0.0414;//公积金 1～5年 4.14%
lilv_array[6][2][10] = 0.0459;//公积金 5-30年 4.59%
//2006年	8月19日的新利率下限
lilv_array[7] = new Array;
lilv_array[7][1] = new Array;
lilv_array[7][2] = new Array;
lilv_array[7][1][5] = 0.0551;//商贷 1～5年 5.51%
lilv_array[7][1][10] = 0.0581;//商贷 5-30年 5.81%
lilv_array[7][2][5] = 0.0414;//公积金 1～5年 4.14%
lilv_array[7][2][10] = 0.0459;//公积金 5-30年 4.59%
//2006年	8月19日的新利率上限
lilv_array[8] = new Array;
lilv_array[8][1] = new Array;
lilv_array[8][2] = new Array;
lilv_array[8][1][5] = 0.0648;//商贷 1～5年 6.48%
lilv_array[8][1][10] = 0.0684;//商贷 5-30年 6.84%
lilv_array[8][2][5] = 0.0414;//公积金 1～5年 4.14%
lilv_array[8][2][10] = 0.0459;//公积金 5-30年 4.59%
//2007年	3月18日的新利率下限
lilv_array[9] = new Array;
lilv_array[9][1] = new Array;
lilv_array[9][2] = new Array;
lilv_array[9][1][5] = 0.0574;//商贷 1～5年 5.74%
lilv_array[9][1][10] = 0.0604;//商贷 5-30年 6.04%
lilv_array[9][2][5] = 0.0432;//公积金 1～5年 4.32%
lilv_array[9][2][10] = 0.0477;//公积金 5-30年 4.77%
//2007年	3月18日的新利率上限
lilv_array[10] = new Array;
lilv_array[10][1] = new Array;
lilv_array[10][2] = new Array;
lilv_array[10][1][5] = 0.0675;//商贷 1～5年 6.75%
lilv_array[10][1][10] = 0.0711;//商贷 5-30年 7.11%
lilv_array[10][2][5] = 0.0432;//公积金 1～5年 4.32%
lilv_array[10][2][10] = 0.0477;//公积金 5-30年 4.77%
//2007年	5月19日的新利率下限
lilv_array[11] = new Array;
lilv_array[11][1] = new Array;
lilv_array[11][2] = new Array;
lilv_array[11][1][5] = 0.0589;//商贷 1～5年 5.89%
lilv_array[11][1][10] = 0.0612;//商贷 5-30年 6.12%
lilv_array[11][2][5] = 0.0441;//公积金 1～5年 4.41%%
lilv_array[11][2][10] = 0.0486;//公积金 5-30年 4.86%%
//2007年	5月19日的新利率上限
lilv_array[12] = new Array;
lilv_array[12][1] = new Array;
lilv_array[12][2] = new Array;
lilv_array[12][1][5] = 0.0693;//商贷 1～5年 6.93%
lilv_array[12][1][10] = 0.0720;//商贷 5-30年 7.20%
lilv_array[12][2][5] = 0.0441;//公积金 1～5年 4.41%%
lilv_array[12][2][10] = 0.0486;//公积金 5-30年 4.86%%
//2007年	7月21日的新利率下限
lilv_array[13] = new Array;
lilv_array[13][1] = new Array;
lilv_array[13][2] = new Array;
lilv_array[13][1][5] = 0.0612;//商贷 1～5年 6.12%
lilv_array[13][1][10] = 0.06273;//商贷 5-30年 6.273%
lilv_array[13][2][5] = 0.0450;//公积金 1～5年 4.50%%
lilv_array[13][2][10] = 0.0495;//公积金 5-30年 4.95%%
//2007年	7月21日的新利率上限
lilv_array[14] = new Array;
lilv_array[14][1] = new Array;
lilv_array[14][2] = new Array;
lilv_array[14][1][5] = 0.0720;//商贷 1～5年 7.20%
lilv_array[14][1][10] = 0.0738;//商贷 5-30年 7.38%
lilv_array[14][2][5] = 0.0450;//公积金 1～5年 4.50%%
lilv_array[14][2][10] = 0.0495;//公积金 5-30年 4.95%%
//2007年	8月22日的新利率下限
lilv_array[15] = new Array;
lilv_array[15][1] = new Array;
lilv_array[15][2] = new Array;
lilv_array[15][1][5] = 0.06273;//商贷 1～5年 6.273%
lilv_array[15][1][10] = 0.06426;//商贷 5-30年 6.426%
lilv_array[15][2][5] = 0.0459;//公积金 1～5年 4.59%
lilv_array[15][2][10] = 0.0504;//公积金 5-30年 5.04%
//2007年	8月22日的新利率上限
lilv_array[16] = new Array;
lilv_array[16][1] = new Array;
lilv_array[16][2] = new Array;
lilv_array[16][1][5] = 0.0738;//商贷 1～5年 7.38%
lilv_array[16][1][10] = 0.0756;//商贷 5-30年 7.56%
lilv_array[16][2][5] = 0.0459;//公积金 1～5年 4.59%
lilv_array[16][2][10] = 0.0504;//公积金 5-30年 5.04%
//2007年	9月15日的新利率下限
lilv_array[17] = new Array;
lilv_array[17][1] = new Array;
lilv_array[17][2] = new Array;
lilv_array[17][1][5] = 0.06503;//商贷 1～5年 6.503%
lilv_array[17][1][10] = 0.06656;//商贷 5-30年 6.656%
lilv_array[17][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[17][2][10] = 0.0522;//公积金 5-30年 5.22%
//2007年	9月15日的新利率上限
lilv_array[18] = new Array;
lilv_array[18][1] = new Array;
lilv_array[18][2] = new Array;
lilv_array[18][1][5] = 0.0765;//商贷 1～5年 7.65%
lilv_array[18][1][10] = 0.0783;//商贷 5-30年 7.83%
lilv_array[18][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[18][2][10] = 0.0522;//公积金 5-30年 5.22%
//2007年	9月15日新利率(第二套房)
lilv_array[19] = new Array;
lilv_array[19][1] = new Array;
lilv_array[19][2] = new Array;
lilv_array[19][1][5] = 0.08415;//商贷 1～5年 8.415%
lilv_array[19][1][10] = 0.08613;//商贷 5-30年 8.613%
lilv_array[19][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[19][2][10] = 0.0522;//公积金 5-30年 5.22%
//2007年	12月21日的新利率下限
lilv_array[20] = new Array;
lilv_array[20][1] = new Array;
lilv_array[20][2] = new Array;
lilv_array[20][1][5] = 0.06579;//商贷 1～5年 6.579%
lilv_array[20][1][10] = 0.06656;//商贷 5-30年 6.656%
lilv_array[20][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[20][2][10] = 0.0522;//公积金 5-30年 5.22%
//2007年	12月21日的新利率上限
lilv_array[21] = new Array;
lilv_array[21][1] = new Array;
lilv_array[21][2] = new Array;
lilv_array[21][1][5] = 0.0851;//商贷 1～5年 8.514%
lilv_array[21][1][10] = 0.0861;//商贷 5-30年 8.613%
lilv_array[21][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[21][2][10] = 0.0522;//公积金 5-30年 5.22%
//2007年	12月21日新利率(第二套房)
lilv_array[22] = new Array;
lilv_array[22][1] = new Array;
lilv_array[22][2] = new Array;
lilv_array[22][1][5] = 0.0851;//商贷 1～5年 8.514%
lilv_array[22][1][10] = 0.0861;//商贷 5-30年 8.613%
lilv_array[22][2][5] = 0.0477;//公积金 1～5年 4.77%
lilv_array[22][2][10] = 0.0522;//公积金 5-30年 5.22%
//2008年	09月16日新利率下限
lilv_array[23] = new Array;
lilv_array[23][1] = new Array;
lilv_array[23][2] = new Array;
lilv_array[23][1][5] = 0.06426;//商贷 1～5年 6.426%
lilv_array[23][1][10] = 0.06579;//商贷 5-30年 6.579%
lilv_array[23][2][5] = 0.0459;//公积金 1～5年 4.59%
lilv_array[23][2][10] = 0.0513;//公积金 5-30年 5.13%
//2008年	09月16日新利率上限
lilv_array[24] = new Array;
lilv_array[24][1] = new Array;
lilv_array[24][2] = new Array;
lilv_array[24][1][5] = 0.0832;//商贷 1～5年 8.32%
lilv_array[24][1][10] = 0.0851;//商贷 5-30年 8.51%
lilv_array[24][2][5] = 0.0459;//公积金 1～5年 4.59%
lilv_array[24][2][10] = 0.0513;//公积金 5-30年 5.13%
//2008年	09月16日新利率(第二套房)
lilv_array[25] = new Array;
lilv_array[25][1] = new Array;
lilv_array[25][2] = new Array;
lilv_array[25][1][5] = 0.0832;//商贷 1～5年 8.32%
lilv_array[25][1][10] = 0.0851;//商贷 5-30年 8.51%
lilv_array[25][2][5] = 0.0459;//公积金 1～5年 4.59%
lilv_array[25][2][10] = 0.0513;//公积金 5-30年 5.13%
//2008年	10月09日新利率下限
lilv_array[26] = new Array;
lilv_array[26][1] = new Array;
lilv_array[26][2] = new Array;
lilv_array[26][1][5] = 0.062;//商贷 1～5年 6.20%
lilv_array[26][1][10] = 0.0635;//商贷 5-30年 6.35%
lilv_array[26][2][5] = 0.0432;//公积金 1～5年 4.32%
lilv_array[26][2][10] = 0.0486;//公积金 5-30年 4.86%
//2008年	10月09日新利率上限
lilv_array[27] = new Array;
lilv_array[27][1] = new Array;
lilv_array[27][2] = new Array;
lilv_array[27][1][5] = 0.0802;//商贷 1～5年 8.02%
lilv_array[27][1][10] = 0.0822;//商贷 5-30年 8.22%
lilv_array[27][2][5] = 0.0432;//公积金 1～5年 4.32%
lilv_array[27][2][10] = 0.0486;//公积金 5-30年 4.86%
//2008年	10月09日新利率(第二套房)
lilv_array[28] = new Array;
lilv_array[28][1] = new Array;
lilv_array[28][2] = new Array;
lilv_array[28][1][5] = 0.0802;//商贷 1～5年 8.02%
lilv_array[28][1][10] = 0.0822;//商贷 5-30年 8.22%
lilv_array[28][2][5] = 0.0432;//公积金 1～5年 4.32%
lilv_array[28][2][10] = 0.0486;//公积金 5-30年 4.86%
//2008年	10月27日新利率下限
lilv_array[29] = new Array;
lilv_array[29][1] = new Array;
lilv_array[29][2] = new Array;
lilv_array[29][1][5] = 0.051;//商贷 1～5年 5.10%
lilv_array[29][1][10] = 0.0523;//商贷 5-30年 5.23%
lilv_array[29][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[29][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月27日新利率上限
lilv_array[30] = new Array;
lilv_array[30][1] = new Array;
lilv_array[30][2] = new Array;
lilv_array[30][1][5] = 0.0802;//商贷 1～5年 8.02%
lilv_array[30][1][10] = 0.0822;//商贷 5-30年 8.22%
lilv_array[30][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[30][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月27日新利率基准
lilv_array[31] = new Array;
lilv_array[31][1] = new Array;
lilv_array[31][2] = new Array;
lilv_array[31][1][5] = 0.0729;//商贷 1～5年 7.29%
lilv_array[31][1][10] = 0.0747;//商贷 5-30年 7.47%
lilv_array[31][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[31][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月27日新利率(第二套房)
lilv_array[32] = new Array;
lilv_array[32][1] = new Array;
lilv_array[32][2] = new Array;
lilv_array[32][1][5] = 0.0802;//商贷 1～5年 8.02%
lilv_array[32][1][10] = 0.0822;//商贷 5-30年 8.22%
lilv_array[32][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[32][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月30日新利率下限
lilv_array[33] = new Array;
lilv_array[33][1] = new Array;
lilv_array[33][2] = new Array;
lilv_array[33][1][5] = 0.0491;//商贷 1～5年 4.91%
lilv_array[33][1][10] = 0.0504;//商贷 5-30年 5.04%
lilv_array[33][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[33][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月30日新利率上限
lilv_array[34] = new Array;
lilv_array[34][1] = new Array;
lilv_array[34][2] = new Array;
lilv_array[34][1][5] = 0.0772;//商贷 1～5年 7.72%
lilv_array[34][1][10] = 0.0792;//商贷 5-30年 7.92%
lilv_array[34][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[34][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月30日新利率基准
lilv_array[35] = new Array;
lilv_array[35][1] = new Array;
lilv_array[35][2] = new Array;
lilv_array[35][1][5] = 0.0702;//商贷 1～5年 7.02%
lilv_array[35][1][10] = 0.0720;//商贷 5-30年 7.20%
lilv_array[35][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[35][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	10月30日新利率(第二套房)
lilv_array[36] = new Array;
lilv_array[36][1] = new Array;
lilv_array[36][2] = new Array;
lilv_array[36][1][5] = 0.0772;//商贷 1～5年 7.72%
lilv_array[36][1][10] = 0.0792;//商贷 5-30年 7.92%
lilv_array[36][2][5] = 0.0405;//公积金 1～5年 4.05%
lilv_array[36][2][10] = 0.0459;//公积金 5-30年 4.59%
//2008年	11月27日新利率下限
lilv_array[37] = new Array;
lilv_array[37][1] = new Array;
lilv_array[37][2] = new Array;
lilv_array[37][1][5] = 0.0416;//商贷 1～5年 4.16%
lilv_array[37][1][10] = 0.0428;//商贷 5-30年 4.28%
lilv_array[37][2][5] = 0.0351;//公积金 1～5年 3.51%
lilv_array[37][2][10] = 0.0405;//公积金 5-30年 4.05%
//2008年	11月27日新利率上限
lilv_array[38] = new Array;
lilv_array[38][1] = new Array;
lilv_array[38][2] = new Array;
lilv_array[38][1][5] = 0.0653;//商贷 1～5年 6.53%
lilv_array[38][1][10] = 0.0673;//商贷 5-30年 6.73%
lilv_array[38][2][5] = 0.0351;//公积金 1～5年 3.51%
lilv_array[38][2][10] = 0.0405;//公积金 5-30年 4.05%
//2008年	11月27日新利率基准
lilv_array[39] = new Array;
lilv_array[39][1] = new Array;
lilv_array[39][2] = new Array;
lilv_array[39][1][5] = 0.0594;//商贷 1～5年 5.94%
lilv_array[39][1][10] = 0.0612;//商贷 5-30年 6.12%
lilv_array[39][2][5] = 0.0351;//公积金 1～5年 3.51%
lilv_array[39][2][10] = 0.0405;//公积金 5-30年 4.05%
//2008年	11月27日新利率(第二套房)
lilv_array[40] = new Array;
lilv_array[40][1] = new Array;
lilv_array[40][2] = new Array;
lilv_array[40][1][5] = 0.0653;//商贷 1～5年 6.53%
lilv_array[40][1][10] = 0.0673;//商贷 5-30年 6.73%
lilv_array[40][2][5] = 0.0351;//公积金 1～5年 3.51%
lilv_array[40][2][10] = 0.0405;//公积金 5-30年 4.05%
//2008年	12月23日新利率下限(7折)
lilv_array[41] = new Array;
lilv_array[41][1] = new Array;
lilv_array[41][2] = new Array;
lilv_array[41][1][5] = 0.0403;//商贷 1～5年 4.03%
lilv_array[41][1][10] = 0.0416;//商贷 5-30年 4.16%
lilv_array[41][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[41][2][10] = 0.0387;//公积金 5-30年 3.87%
//2008年	12月23日新利率下限(85折)
lilv_array[42] = new Array;
lilv_array[42][1] = new Array;
lilv_array[42][2] = new Array;
lilv_array[42][1][5] = 0.0490;//商贷 1～5年 4.90%
lilv_array[42][1][10] = 0.0505;//商贷 5-30年 5.05%
lilv_array[42][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[42][2][10] = 0.0387;//公积金 5-30年 3.87%
//2008年	12月23日新利率上限(1.1倍)
lilv_array[43] = new Array;
lilv_array[43][1] = new Array;
lilv_array[43][2] = new Array;
lilv_array[43][1][5] = 0.0634;//商贷 1～5年 6.34%
lilv_array[43][1][10] = 0.0653;//商贷 5-30年 6.53%
lilv_array[43][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[43][2][10] = 0.0387;//公积金 5-30年 3.87%
//2008年	12月23日新利率基准
lilv_array[44] = new Array;
lilv_array[44][1] = new Array;
lilv_array[44][2] = new Array;
lilv_array[44][1][5] = 0.0576;//商贷 1～5年 5.76%
lilv_array[44][1][10] = 0.0594;//商贷 5-30年 5.94%
lilv_array[44][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[44][2][10] = 0.0387;//公积金 5-30年 3.87%
//2008年	12月23日新利率(第二套房)(1.1倍)
lilv_array[45] = new Array;
lilv_array[45][1] = new Array;
lilv_array[45][2] = new Array;
lilv_array[45][1][5] = 0.0634;//商贷 1～5年 6.34%
lilv_array[45][1][10] = 0.0653;//商贷 5-30年 6.53%
lilv_array[45][2][5] = 0.0333;//公积金 1～5年 3.33%
lilv_array[45][2][10] = 0.0387;//公积金 5-30年 3.87%
//2010年	10月20日新利率下限(85折)
lilv_array[46] = new Array;
lilv_array[46][1] = new Array;
lilv_array[46][2] = new Array;
lilv_array[46][1][5] = 0.0596 * 0.85;//商贷 1～5年 5.96%
lilv_array[46][1][10] = 0.0614 * 0.85;//商贷 5-30年 6.14%
lilv_array[46][2][5] = 0.0350;//公积金 1～5年 3.50%
lilv_array[46][2][10] = 0.0405;//公积金 5-30年 4.05%
//2010年	10月20日新利率基准
lilv_array[47] = new Array;
lilv_array[47][1] = new Array;
lilv_array[47][2] = new Array;
lilv_array[47][1][5] = 0.0596;//商贷 1～5年 5.96%
lilv_array[47][1][10] = 0.0614;//商贷 5-30年 6.14%
lilv_array[47][2][5] = 0.0350;//公积金 1～5年 3.50%
lilv_array[47][2][10] = 0.0405;//公积金 5-30年 4.05%
//2010年	10月20日新利率上限(1.1倍)
lilv_array[48] = new Array;
lilv_array[48][1] = new Array;
lilv_array[48][2] = new Array;
lilv_array[48][1][5] = 0.0596 * 1.1;//商贷 1～5年 5.96%
lilv_array[48][1][10] = 0.0614 * 1.1;//商贷 5-30年 6.14%
lilv_array[48][2][5] = 0.0350;//公积金 1～5年 3.50%
lilv_array[48][2][10] = 0.0405;//公积金 5-30年 4.05%
//2010年	10月20日新利率下限(85折)
lilv_array[49] = new Array;
lilv_array[49][1] = new Array;
lilv_array[49][2] = new Array;
lilv_array[49][1][5] = 0.0622 * 0.85;//商贷 1～5年 5.96%
lilv_array[49][1][10] = 0.0640 * 0.85;//商贷 5-30年 6.14%
lilv_array[49][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[49][2][10] = 0.0430;//公积金 5-30年 4.05%
//2010年	10月20日新利率基准
lilv_array[50] = new Array;
lilv_array[50][1] = new Array;
lilv_array[50][2] = new Array;
lilv_array[50][1][5] = 0.0622;//商贷 1～5年 5.96%
lilv_array[50][1][10] = 0.0640;//商贷 5-30年 6.14%
lilv_array[50][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[50][2][10] = 0.0430;//公积金 5-30年 4.05%
//2010年	10月20日新利率上限(1.1倍)
lilv_array[51] = new Array;
lilv_array[51][1] = new Array;
lilv_array[51][2] = new Array;
lilv_array[51][1][5] = 0.0622 * 1.1;//商贷 1～5年 5.96%
lilv_array[51][1][10] = 0.0640 * 1.1;//商贷 5-30年 6.14%
lilv_array[51][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[51][2][10] = 0.0430;//公积金 5-30年 4.05%
//2011年02月09日新利率下限(85折)
lilv_array[52] = new Array;
lilv_array[52][1] = new Array;
lilv_array[52][2] = new Array;
lilv_array[52][1][1] = 0.0606 * 0.85;//商贷 1年 6.06%
lilv_array[52][1][3] = 0.0610 * 0.85;//商贷 1-3年 6.10%
lilv_array[52][1][5] = 0.0645 * 0.85;//商贷 3-5年 6.45%
lilv_array[52][1][10] = 0.0660 * 0.85;//商贷 >5年 6.60%
lilv_array[52][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[52][2][10] = 0.0430;//公积金 5-30年 4.05%
//2011年02月09日新利率基准
lilv_array[53] = new Array;
lilv_array[53][1] = new Array;
lilv_array[53][2] = new Array;
lilv_array[53][1][1] = 0.0606;//商贷 1年 6.06%
lilv_array[53][1][3] = 0.0610;//商贷 1-3年 6.10%
lilv_array[53][1][5] = 0.0645;//商贷 3-5年 6.45%
lilv_array[53][1][10] = 0.0660;//商贷 >5年 6.60%
lilv_array[53][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[53][2][10] = 0.0430;//公积金 5-30年 4.05%
//2011年02月09日新利率上限(1.1倍)
lilv_array[54] = new Array;
lilv_array[54][1] = new Array;
lilv_array[54][2] = new Array;
lilv_array[54][1][1] = 0.0606 * 1.1;//商贷 1年 6.06%
lilv_array[54][1][3] = 0.0610 * 1.1;//商贷 1-3年 6.10%
lilv_array[54][1][5] = 0.0645 * 1.1;//商贷 3-5年 6.45%
lilv_array[54][1][10] = 0.0660 * 1.1;//商贷 >5年 6.60%
lilv_array[54][2][5] = 0.0375;//公积金 1～5年 3.50%
lilv_array[54][2][10] = 0.0430;//公积金 5-30年 4.05%

//2011年04月06日新利率下限(85折)
lilv_array[55] = new Array;
lilv_array[55][1] = new Array;
lilv_array[55][2] = new Array;
lilv_array[55][1][1] = 0.0631 * 0.85;//商贷 1年 6.06%
lilv_array[55][1][3] = 0.0640 * 0.85;//商贷 1-3年 6.10%
lilv_array[55][1][5] = 0.0665 * 0.85;//商贷 3-5年 6.45%
lilv_array[55][1][10] = 0.0680 * 0.85;//商贷 >5年 6.60%
lilv_array[55][2][5] = 0.0420;//公积金 1～5年 3.50%
lilv_array[55][2][10] = 0.0470;//公积金 5-30年 4.05%
//2011年04月06日新利率基准
lilv_array[56] = new Array;
lilv_array[56][1] = new Array;
lilv_array[56][2] = new Array;
lilv_array[56][1][1] = 0.0631;//商贷 1年 6.06%
lilv_array[56][1][3] = 0.0640;//商贷 1-3年 6.10%
lilv_array[56][1][5] = 0.0665;//商贷 3-5年 6.45%
lilv_array[56][1][10] = 0.0680;//商贷 >5年 6.60%
lilv_array[56][2][5] = 0.0420;//公积金 1～5年 3.50%
lilv_array[56][2][10] = 0.0470;//公积金 5-30年 4.05%
//2011年04月06日新利率上限(1.1倍)
lilv_array[57] = new Array;
lilv_array[57][1] = new Array;
lilv_array[57][2] = new Array;
lilv_array[57][1][1] = 0.0631 * 1.1;//商贷 1年 6.06%
lilv_array[57][1][3] = 0.0640 * 1.1;//商贷 1-3年 6.10%
lilv_array[57][1][5] = 0.0665 * 1.1;//商贷 3-5年 6.45%
lilv_array[57][1][10] = 0.0680 * 1.1;//商贷 >5年 6.60%
lilv_array[57][2][5] = 0.0420;//公积金 1～5年 3.50%
lilv_array[57][2][10] = 0.0470;//公积金 5-30年 4.05%


//2011年07月07日新利率下限(85折)
lilv_array[58] = new Array;
lilv_array[58][1] = new Array;
lilv_array[58][2] = new Array;
lilv_array[58][1][1] = 0.0656 * 0.85;//商贷 1年 6.06%
lilv_array[58][1][3] = 0.0665 * 0.85;//商贷 1-3年 6.10%
lilv_array[58][1][5] = 0.0690 * 0.85;//商贷 3-5年 6.45%
lilv_array[58][1][10] = 0.0705 * 0.85;//商贷 >5年 6.60%
lilv_array[58][2][5] = 0.0445;//公积金 1～5年 3.50%
lilv_array[58][2][10] = 0.0490;//公积金 5-30年 4.05%
//2011年07月07日新利率基准
lilv_array[59] = new Array;
lilv_array[59][1] = new Array;
lilv_array[59][2] = new Array;
lilv_array[59][1][1] = 0.0656;//商贷 1年 6.06%
lilv_array[59][1][3] = 0.0665;//商贷 1-3年 6.10%
lilv_array[59][1][5] = 0.0690;//商贷 3-5年 6.45%
lilv_array[59][1][10] = 0.0705;//商贷 >5年 6.60%
lilv_array[59][2][5] = 0.0445;//公积金 1～5年 3.50%
lilv_array[59][2][10] = 0.0490;//公积金 5-30年 4.05%
//2011年07月07日新利率上限(1.1倍)
lilv_array[60] = new Array;
lilv_array[60][1] = new Array;
lilv_array[60][2] = new Array;
lilv_array[60][1][1] = 0.0656 * 1.1;//商贷 1年 6.06%
lilv_array[60][1][3] = 0.0665 * 1.1;//商贷 1-3年 6.10%
lilv_array[60][1][5] = 0.0690 * 1.1;//商贷 3-5年 6.45%
lilv_array[60][1][10] = 0.0705 * 1.1;//商贷 >5年 6.60%
lilv_array[60][2][5] = 0.0445;//公积金 1～5年 3.50%
lilv_array[60][2][10] = 0.0490;//公积金 5-30年 4.05%
//2012年06月08日新利率下限(80折)
lilv_array[61] = new Array;
lilv_array[61][1] = new Array;
lilv_array[61][2] = new Array;
lilv_array[61][1][1] = 0.0631 * 0.8;//商贷 1年 6.31%
lilv_array[61][1][3] = 0.064 * 0.8;//商贷 1-3年 6.40%
lilv_array[61][1][5] = 0.0665 * 0.8;//商贷 3-5年 6.65%
lilv_array[61][1][10] = 0.068 * 0.8;//商贷 >5年 6.8%
lilv_array[61][2][5] = 0.042;//公积金 1～5年 4.2%
lilv_array[61][2][10] = 0.047;//公积金 5-30年 4.7%
//2012年06月08日新利率下限(85折)
lilv_array[62] = new Array;
lilv_array[62][1] = new Array;
lilv_array[62][2] = new Array;
lilv_array[62][1][1] = 0.0631 * 0.85;//商贷 1年 6.31%
lilv_array[62][1][3] = 0.064 * 0.85;//商贷 1-3年 6.40%
lilv_array[62][1][5] = 0.0665 * 0.85;//商贷 3-5年 6.65%
lilv_array[62][1][10] = 0.068 * 0.85;//商贷 >5年 6.8%
lilv_array[62][2][5] = 0.042;//公积金 1～5年 4.2%
lilv_array[62][2][10] = 0.047;//公积金 5-30年 4.7%
//2012年06月08日新利率基准
lilv_array[63] = new Array;
lilv_array[63][1] = new Array;
lilv_array[63][2] = new Array;
lilv_array[63][1][1] = 0.0631;//商贷 1年 6.31%
lilv_array[63][1][3] = 0.064;//商贷 1-3年 6.40%
lilv_array[63][1][5] = 0.0665;//商贷 3-5年 6.65%
lilv_array[63][1][10] = 0.068;//商贷 >5年 6.8%
lilv_array[63][2][5] = 0.042;//公积金 1～5年 4.2%
lilv_array[63][2][10] = 0.047;//公积金 5-30年 4.7%
//2012年06月08日新利率上限(1.1倍)
lilv_array[64] = new Array;
lilv_array[64][1] = new Array;
lilv_array[64][2] = new Array;
lilv_array[64][1][1] = 0.0631 * 1.1;//商贷 1年 6.31%
lilv_array[64][1][3] = 0.064 * 1.1;//商贷 1-3年 6.40%
lilv_array[64][1][5] = 0.0665 * 1.1;//商贷 3-5年 6.65%
lilv_array[64][1][10] = 0.068 * 1.1;//商贷 >5年 6.8%
lilv_array[64][2][5] = 0.042;//公积金 1～5年 4.2%
lilv_array[64][2][10] = 0.047;//公积金 5-30年 4.7%
//2012年07月06日新利率下限(70折)
lilv_array[65] = new Array;
lilv_array[65][1] = new Array;
lilv_array[65][2] = new Array;
lilv_array[65][1][1] = 0.060 * 0.7;//商贷 1年 6.31%
lilv_array[65][1][3] = 0.0615 * 0.7;//商贷 1-3年 6.40%
lilv_array[65][1][5] = 0.0640 * 0.7;//商贷 3-5年 6.65%
lilv_array[65][1][10] = 0.0655 * 0.7;//商贷 >5年 6.8%
lilv_array[65][2][5] = 0.040;//公积金 1～5年 4.2%
lilv_array[65][2][10] = 0.045;//公积金 5-30年 4.7%
//2012年07月06日新利率下限(80折)
lilv_array[66] = new Array;
lilv_array[66][1] = new Array;
lilv_array[66][2] = new Array;
lilv_array[66][1][1] = 0.060 * 0.8;//商贷 1年 6.31%
lilv_array[66][1][3] = 0.0615 * 0.8;//商贷 1-3年 6.40%
lilv_array[66][1][5] = 0.0640 * 0.8;//商贷 3-5年 6.65%
lilv_array[66][1][10] = 0.0655 * 0.8;//商贷 >5年 6.8%
lilv_array[66][2][5] = 0.040;//公积金 1～5年 4.2%
lilv_array[66][2][10] = 0.045;//公积金 5-30年 4.7%
//2012年07月06日新利率下限(85折)
lilv_array[67] = new Array;
lilv_array[67][1] = new Array;
lilv_array[67][2] = new Array;
lilv_array[67][1][1] = 0.060 * 0.85;//商贷 1年 6.31%
lilv_array[67][1][3] = 0.0615 * 0.85;//商贷 1-3年 6.40%
lilv_array[67][1][5] = 0.0640 * 0.85;//商贷 3-5年 6.65%
lilv_array[67][1][10] = 0.0655 * 0.85;//商贷 >5年 6.8%
lilv_array[67][2][5] = 0.040;//公积金 1～5年 4.2%
lilv_array[67][2][10] = 0.045;//公积金 5-30年 4.7%
////2012年07月06日新利率基准
lilv_array[68] = new Array;
lilv_array[68][1] = new Array;
lilv_array[68][2] = new Array;
lilv_array[68][1][1] = 0.060;//商贷 1年 6.31%
lilv_array[68][1][3] = 0.0615;//商贷 1-3年 6.40%
lilv_array[68][1][5] = 0.0640;//商贷 3-5年 6.65%
lilv_array[68][1][10] = 0.0655;//商贷 >5年 6.8%
lilv_array[68][2][5] = 0.040;//公积金 1～5年 4.2%
lilv_array[68][2][10] = 0.045;//公积金 5-30年 4.7%
////2015年12月24日基准利率
lilv_array[69] = new Array;
lilv_array[69][1] = new Array;
lilv_array[69][2] = new Array;
lilv_array[69][1][1] = 0.060 * 1.1;//商贷 1年 6.31%
lilv_array[69][1][3] = 0.0615 * 1.1;//商贷 1-3年 6.40%
lilv_array[69][1][5] = 0.0640 * 1.1;//商贷 3-5年 6.65%
lilv_array[69][1][10] = 0.0655 * 1.1;//商贷 >5年 6.8%
lilv_array[69][2][5] = 0.040;//公积金 1～5年 4.2%
lilv_array[69][2][10] = 0.045;//公积金 5-30年 4.7%
//2016年1月1日基准利率
lilv_array[80] = new Array;
lilv_array[80][1] = new Array;
lilv_array[80][2] = new Array;
lilv_array[80][1][1] = 0.0435;//商贷1年 4.35%
lilv_array[80][1][3] = 0.0475;//商贷1～3年 4.75%
lilv_array[80][1][5] = 0.0475;//商贷 3～5年 4.75%
lilv_array[80][1][10] = 0.049;//商贷 5-30年 4.90%
lilv_array[80][2][5] = 0.0275;//公积金 1～5年 2.75%
lilv_array[80][2][10] = 0.0325;//公积金 5-30年 3.25%
//2016年1月1日利率下限（7折）
lilv_array[81] = new Array;
lilv_array[81][1] = new Array;
lilv_array[81][2] = new Array;
lilv_array[81][1][1] = 0.03045;//商贷1年 3.045%
lilv_array[81][1][3] = 0.03325;//商贷1～3年 3.325%
lilv_array[81][1][5] = 0.03325;//商贷 3～5年 3.325%
lilv_array[81][1][10] = 0.0343;//商贷 5-30年 3.43%
lilv_array[81][2][5] = 0.0275;//公积金 1～5年 2.75%
lilv_array[81][2][10] = 0.0325;//公积金 5-30年 3.25%
//2016年1月1日利率下限（85折）
lilv_array[82] = new Array;
lilv_array[82][1] = new Array;
lilv_array[82][2] = new Array;
lilv_array[82][1][1] = 0.03698;//商贷1年 3.698%
lilv_array[82][1][3] = 0.04038;//商贷1～3年 4.038%
lilv_array[82][1][5] = 0.04038;//商贷 3～5年 4.038%
lilv_array[82][1][10] = 0.04165;//商贷 5-30年 4.165%
lilv_array[82][2][5] = 0.0275;//公积金 1～5年 2.75%
lilv_array[82][2][10] = 0.0325;//公积金 5-30年 3.25%
//2016年1月1日利率上限（1.1倍）
lilv_array[83] = new Array;
lilv_array[83][1] = new Array;
lilv_array[83][2] = new Array;
lilv_array[83][1][1] = 0.04785;//商贷1年 4.785%
lilv_array[83][1][3] = 0.05225;//商贷1～3年 5.225%
lilv_array[83][1][5] = 0.05225;//商贷 3～5年 5.225%
lilv_array[83][1][10] = 0.0539;//商贷 5-30年 5.39%
lilv_array[83][2][5] = 0.0275;//公积金 1～5年 2.75%
lilv_array[83][2][10] = 0.0325;//公积金 5-30年 3.25%


//得到利率
Calculator.getRate = function(lilv_class, type, years){
    var lilv_class = parseInt(lilv_class);
    /*
    if (years <= 5) {
        return lilv_array[lilv_class][type][5];
    }
    else {
        return lilv_array[lilv_class][type][10];
    }
    */
    if(lilv_class >= 52 && type == 1){
        if(years == 1){
            return lilv_array[lilv_class][type][1];
        }
        if(years > 1 && years <= 3){
            return lilv_array[lilv_class][type][3];
        }
        if(years > 3 && years <= 5){
            return lilv_array[lilv_class][type][5];
        }
        if(years > 5){
            return lilv_array[lilv_class][type][10];
        }
    }else{
        if (years <= 5) {
            return lilv_array[lilv_class][type][5];
        }
        else {
            return lilv_array[lilv_class][type][10];
        }
    }
}
//type 1 商贷 2 公积金
Calculator.calculate = function(type, amount, year, interest) {
	var month = year*12;
	var rate = this.getRate(interest, type, year);
	var perrate = rate/12;
	var permonth = amount*perrate*Math.pow((1+perrate),month)/(Math.pow((1+perrate),month)-1)
	var total = permonth * month;
	var result = {};
	result.amount = parseInt(amount);
	result.month = month;
	result.permonth = parseFloat(permonth.toFixed(2));
	result.interest = parseFloat((total-amount).toFixed(2));
	result.total = parseFloat(total.toFixed(2));
	var perfee = amount/month; //每月本金
	var tInterest = 0;
	for (var m=0; m < month; m++) {
		mInterest = (amount-perfee*m)*perrate;
		tInterest += mInterest;
	}
	var total2 = amount + tInterest;

	var permonth2 = total2/month;
	result.permonth2 = parseFloat(permonth2.toFixed(2));
	result.interest2 = parseFloat(tInterest.toFixed(2));
	result.total2 = parseFloat(total2.toFixed(2));
	return result;
}