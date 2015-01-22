package com.lemania.timetracking.client.rpttimebystatus;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;

public class RptTimeByStatusModule extends AbstractPresenterModule {
    @Override
    protected void configure() {
        bindPresenter(RptTimeByStatusPresenter.class, RptTimeByStatusPresenter.MyView.class, RptTimeByStatusView.class, RptTimeByStatusPresenter.MyProxy.class);
    }
}