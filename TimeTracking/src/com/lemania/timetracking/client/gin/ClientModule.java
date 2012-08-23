package com.lemania.timetracking.client.gin;

import com.gwtplatform.mvp.client.gin.AbstractPresenterModule;
import com.gwtplatform.mvp.client.gin.DefaultModule;
import com.lemania.timetracking.client.place.DefaultPlace;
import com.lemania.timetracking.client.place.NameTokens;
import com.lemania.timetracking.client.place.TimeTrackingPlaceManager;
import com.lemania.timetracking.client.presenter.MainPagePresenter;
import com.lemania.timetracking.client.presenter.HomePresenter;
import com.lemania.timetracking.client.presenter.EcolePresenter;
import com.lemania.timetracking.client.view.ContactView;
import com.lemania.timetracking.client.view.CoursAddView;
import com.lemania.timetracking.client.view.CoursView;
import com.lemania.timetracking.client.view.EcoleAddView;
import com.lemania.timetracking.client.view.EcoleView;
import com.lemania.timetracking.client.view.HomeView;
import com.lemania.timetracking.client.view.MainPageView;
import com.lemania.timetracking.client.view.ProfsAddView;
import com.lemania.timetracking.client.view.ProfsView;
import com.lemania.timetracking.client.view.TimeInputView;
import com.lemania.timetracking.client.view.TypesAddView;
import com.lemania.timetracking.client.view.TypesView;
import com.lemania.timetracking.client.presenter.EcoleAddPresenter;
import com.lemania.timetracking.client.presenter.TimeInputPresenter;
import com.lemania.timetracking.client.presenter.CoursPresenter;
import com.lemania.timetracking.client.presenter.CoursAddPresenter;
import com.lemania.timetracking.client.presenter.TypesPresenter;
import com.lemania.timetracking.client.presenter.TypesAddPresenter;
import com.lemania.timetracking.client.presenter.ProfsPresenter;
import com.lemania.timetracking.client.presenter.ProfsAddPresenter;
import com.lemania.timetracking.client.presenter.ContactPresenter;

public class ClientModule extends AbstractPresenterModule {

	@Override
	protected void configure() {
		// Singletons
		install(new DefaultModule(TimeTrackingPlaceManager.class));
		
		// Set DefaultPlace to homepage
		bindConstant().annotatedWith(DefaultPlace.class).to(
				NameTokens.homepage);
		
		bindPresenter(MainPagePresenter.class, MainPagePresenter.MyView.class,
				MainPageView.class, MainPagePresenter.MyProxy.class);

		bindPresenter(HomePresenter.class, HomePresenter.MyView.class,
				HomeView.class, HomePresenter.MyProxy.class);

		bindPresenter(EcolePresenter.class, EcolePresenter.MyView.class,
				EcoleView.class, EcolePresenter.MyProxy.class);

		bindPresenter(EcoleAddPresenter.class, EcoleAddPresenter.MyView.class,
				EcoleAddView.class, EcoleAddPresenter.MyProxy.class);

		bindPresenter(TimeInputPresenter.class,
				TimeInputPresenter.MyView.class, TimeInputView.class,
				TimeInputPresenter.MyProxy.class);

		bindPresenter(CoursPresenter.class, CoursPresenter.MyView.class,
				CoursView.class, CoursPresenter.MyProxy.class);

		bindPresenter(CoursAddPresenter.class, CoursAddPresenter.MyView.class,
				CoursAddView.class, CoursAddPresenter.MyProxy.class);

		bindPresenter(TypesPresenter.class, TypesPresenter.MyView.class,
				TypesView.class, TypesPresenter.MyProxy.class);

		bindPresenter(TypesAddPresenter.class, TypesAddPresenter.MyView.class,
				TypesAddView.class, TypesAddPresenter.MyProxy.class);

		bindPresenter(ProfsPresenter.class, ProfsPresenter.MyView.class,
				ProfsView.class, ProfsPresenter.MyProxy.class);

		bindPresenter(ProfsAddPresenter.class, ProfsAddPresenter.MyView.class,
				ProfsAddView.class, ProfsAddPresenter.MyProxy.class);

		bindPresenter(ContactPresenter.class, ContactPresenter.MyView.class,
				ContactView.class, ContactPresenter.MyProxy.class);
	}
}